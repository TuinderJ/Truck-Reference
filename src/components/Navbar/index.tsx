import { OuterContainer, LogoContainer, Logo, MenuIcon, LinksContainer, NavLink, LogButton, RemoveVehicleButton } from './style';
import logo from '../../assets/leasing-logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavbarProps } from '../types';
import auth from '../../utils/auth';

export default function Navbar({ vehicleInformationState, vehicleIsInDatabase }: NavbarProps) {
  const handleToggleMenu = () => {
    const linksContainer = document.getElementById('links-container');
    if (!linksContainer) return;

    linksContainer.style.display === 'flex' ? (linksContainer.style.display = 'none') : (linksContainer.style.display = 'flex');
  };

  const removeVehicle = async () => {
    try {
      await fetch(`https://us-central1-truck-reference.cloudfunctions.net/deleteVehicle?vin=${vehicleInformationState.vin}`, { method: 'POST' });
      window.location.href = '/';
    } catch (error) {
      console.error('error is here', error);
    }
  };

  return (
    <OuterContainer>
      <LogoContainer>
        <Link to={'/'}>
          <Logo src={logo} alt='Logo' />
        </Link>
        {auth.loggedIn() ? (
          <MenuIcon onClick={handleToggleMenu}>
            <FaBars />
          </MenuIcon>
        ) : (
          <></>
        )}
      </LogoContainer>
      <LinksContainer id='links-container'>
        {auth.loggedIn() ? <NavLink to={'/new_vehicle'}>New Vehicle</NavLink> : <></>}
        {auth.loggedIn() && vehicleIsInDatabase ? <NavLink to={'/edit_vehicle'}>Edit Vehicle</NavLink> : <></>}
        {auth.loggedIn() && vehicleIsInDatabase ? (
          <RemoveVehicleButton type='button' onClick={removeVehicle}>
            Remove Vehicle
          </RemoveVehicleButton>
        ) : (
          <></>
        )}
        {auth.loggedIn() ? <LogButton>Logout</LogButton> : <LogButton>Login</LogButton>}
      </LinksContainer>
    </OuterContainer>
  );
}
