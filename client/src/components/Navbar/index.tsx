import { OuterContainer, LogoContainer, Logo, MenuIcon, LinksContainer, NavLink, LogButton } from './style';
import logo from '../../assets/leasing-logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleToggleMenu = () => {
    const linksContainer = document.getElementById('links-container');
    if (!linksContainer) return;

    linksContainer.style.display === 'flex' ? (linksContainer.style.display = 'none') : (linksContainer.style.display = 'flex');
  };

  return (
    <OuterContainer>
      <LogoContainer>
        <Link to={'/'}>
          <Logo src={logo} alt='Logo' />
        </Link>
        <MenuIcon onClick={handleToggleMenu}>
          <FaBars />
        </MenuIcon>
      </LogoContainer>
      <LinksContainer id='links-container'>
        <NavLink to={'/'}>New Vehicle</NavLink>
        <NavLink to={'/'}>Edit Vehicle</NavLink>
        <NavLink to={'/'}>Remove Vehicle</NavLink>
        <LogButton>Logout</LogButton>
      </LinksContainer>
    </OuterContainer>
  );
}
