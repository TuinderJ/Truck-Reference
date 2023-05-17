import styled, { css } from 'styled-components';
import { medium, dark, screenSize, defaultButtonStyles, boxShadow, light } from '../../utils/styleUtils';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TableHeaderGroup = styled.thead``;

export const TableHeader = styled.th``;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  background-color: ${light};
  ${boxShadow}
  padding: .5rem;

  @media screen and (min-width: ${screenSize}) {
  }
`;

export const TableData = styled.td``;

export const Input = styled.input`
  &.editable {
    background-color: green;
  }

  &.not-editable {
    background-color: red;
  }
`;

export const UserAccessLevelSelect = styled.select``;

export const UserAccessLevelOption = styled.option``;

export const Button = styled.button`
  ${defaultButtonStyles}
`;

export const Icon = styled.i`
  margin: 0 0.5rem;
  cursor: pointer;
`;
