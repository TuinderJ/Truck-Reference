import styled, { css } from 'styled-components';
import { medium, dark, screenSize, defaultButtonStyles } from '../../utils/styleUtils';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div``;

export const LoginSignupForm = styled.form``;

export const OptionsContainer = styled.div``;

export const Option = styled.div``;

export const OptionLabel = styled.label`
  &.active {
    background-color: blue;
  }
`;

export const OptionInput = styled.input``;

export const InputsContainer = styled.div``;

export const Title = styled.h2``;

export const InputContainer = styled.div``;

export const InputLabel = styled.label``;

export const Input = styled.input``;

export const Button = styled.button`
  ${defaultButtonStyles}
`;
