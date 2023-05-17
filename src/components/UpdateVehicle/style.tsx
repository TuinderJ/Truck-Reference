import styled, { css } from 'styled-components';
import { dark, defaultButtonStyles, medium, screenSize } from '../../utils/styleUtils';

export const MainContainer = styled.div``;

export const NewVehicleForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const submitButtonStyle = css`
  ${defaultButtonStyles}
  border-radius: 0;
  background-color: ${medium};
  font-size: 1.5rem;

  @media screen and (min-width: ${screenSize}) {
    margin: 1rem;
    font-size: 1.75rem;
    border-radius: 0.5rem;
    width: max-content;
    align-self: flex-end;
    background-color: ${dark};
  }
`;

export const TopSubmitButton = styled.button`
  ${submitButtonStyle}
`;

export const BottomSubmitButton = styled.button`
  ${submitButtonStyle}

  @media screen and (min-width: ${screenSize}) {
    display: none;
  }
`;
