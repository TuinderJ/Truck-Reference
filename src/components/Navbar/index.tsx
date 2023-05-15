import { OuterContainer, LogoContainer, Logo, MenuIcon, LinksContainer, NavLink, LogoutButton, RemoveVehicleButton, LoginButton } from './style';
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

  const testLogin = async () => {
    const response = await fetch(`https://us-central1-truck-reference.cloudfunctions.net/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: 'test',
        email: 'test@test.com',
      }),
    });
    const { token } = await response.json();
    auth.login(token);
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
        {auth.loggedIn() ? (
          <LogoutButton type='button' onClick={auth.logout}>
            Logout
          </LogoutButton>
        ) : (
          <LoginButton to={'/'} type='button' onClick={testLogin}>
            Login
          </LoginButton>
        )}
      </LinksContainer>
    </OuterContainer>
  );
}
