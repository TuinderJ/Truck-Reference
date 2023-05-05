import styled from 'styled-components';
import { medium, dark, screenSize } from '../../utils/styleUtils';
import { Link } from 'react-router-dom';

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${screenSize}) {
    flex-direction: row;
    justify-content: space-between;
    background-color: ${dark};
  }
`;

export const LogoContainer = styled.div`
  background-color: ${dark};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 4rem;

  @media screen and (min-width: ${screenSize}) {
    height: 5rem;
  }
`;

export const MenuIcon = styled.button`
  background-color: ${dark};
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: font-size 0.2s;

  &:hover {
    font-size: 2.15rem;
  }

  @media screen and (min-width: ${screenSize}) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  background-color: #cfe1fa;
  padding: 0.25rem;
  display: none;
  /* remove */
  /* display: flex; */
  /* remove */
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;

  @media screen and (min-width: ${screenSize}) {
    display: flex;
    flex-direction: row;
    background-color: inherit;
    padding: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: ${dark};
  text-decoration: none;

  @media screen and (min-width: ${screenSize}) {
    color: white;
  }
`;

export const LogButton = styled.button`
  background-color: #cfe1fa;
  color: ${dark};
  border: none;
  font-size: inherit;

  @media screen and (min-width: ${screenSize}) {
    background-color: ${medium};
    padding: 0.75rem;
    border-radius: 0.5rem;
    color: white;
  }
`;
