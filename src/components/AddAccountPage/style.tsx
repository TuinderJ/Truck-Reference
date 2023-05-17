import styled from 'styled-components';
import { screenSize, defaultButtonStyles } from '../../utils/styleUtils';

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;

  @media screen and (min-width: ${screenSize}) {
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: ${screenSize}) {
    width: 40rem;
    background-color: white;
    padding: 4rem;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.8);
  }
`;

export const Message = styled.p`
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const SubmitButton = styled.button`
  ${defaultButtonStyles}
  font-size: 1.5rem;
  padding: 0.75rem;
`;
