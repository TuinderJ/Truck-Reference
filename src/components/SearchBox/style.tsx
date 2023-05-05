import styled from 'styled-components';
import { light, medium, dark } from '../../utils/styleUtils';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem 0.25rem;
`;

export const SearchBar = styled.input``;

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
    /* border: 1px solid ${dark}; */
    border-radius: 0.25rem;
    box-shadow: 0px 1px 5px rgb(129, 129, 129);
  }
`;

export const OptionRadio = styled.input`
  display: none;
`;

export const OptionLabel = styled.label``;

export const SearchButton = styled.button``;
