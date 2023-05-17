import styled from 'styled-components';
import { light, medium, dark, screenSize, boxShadow } from '../../utils/styleUtils';

export const SearchBoxContainer = styled.div`
  @media screen and (min-width: ${screenSize}) {
    max-width: 40rem;
    margin: 3rem auto;
    padding: 3rem;
    background-color: white;
    ${boxShadow}
    border-radius: 0.5rem;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.25rem;

  @media screen and (min-width: ${screenSize}) {
    padding: 0;
  }
`;

export const SearchBar = styled.input`
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: 2px solid ${dark};
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${light};
  margin: 0.75rem 0;
  padding: 0.125rem 0;
  border-radius: 0.125rem;
`;

export const Option = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.25rem;
  color: ${medium};

  &.selected {
    background-color: white;
    border-radius: 0.25rem;
    ${boxShadow}
  }
`;

export const OptionRadio = styled.input`
  opacity: 0;
  position: absolute;
`;

export const OptionLabel = styled.label``;

export const SearchButton = styled.button`
  background-color: ${dark};
  color: white;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 0.25rem;
`;
