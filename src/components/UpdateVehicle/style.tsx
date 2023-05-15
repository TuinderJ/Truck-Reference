import styled, { css } from 'styled-components';
import { defaultButtonStyles, medium, screenSize } from '../../utils/styleUtils';

export const MainContainer = styled.div``;

export const NewVehicleForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const submitButtonStyle = css`
  ${defaultButtonStyles}
  margin: 1rem 0;
  border-radius: 0;
  background-color: ${medium};
  font-size: 1.5rem;

  @media screen and (min-width: ${screenSize}) {
    margin: 1rem;
    font-size: 1.75rem;
    border-radius: 0.5rem;
    width: max-content;
    align-self: flex-end;
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
