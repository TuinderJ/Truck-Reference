import styled, { css } from 'styled-components';
import { medium, dark, screenSize, defaultButtonStyles, boxShadow, light } from '../../utils/styleUtils';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${screenSize}) {
    margin: 1rem;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TableHeaderGroup = styled.thead``;

export const TableHeader = styled.th`
  flex: 1;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: ${screenSize}) {
    gap: 2rem;
  }
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0.5rem;
  }
`;

export const TableData = styled.td`
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (min-width: ${screenSize}) {
    flex: 1;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.25rem;
  border: none;
  width: 100%;

  &.editable {
    background-color: white;
    box-shadow: 1px 1px 1px 1px;
  }

  &.not-editable {
    background-color: inherit;
    text-align: center;

    &:focus {
      outline: none;
    }
  }
`;

export const UserAccessLevel = styled.p`
  margin: 0;

  @media screen and (min-width: ${screenSize}) {
    width: 100%;
  }
`;

export const UserAccessLevelSelect = styled.select`
  font-size: 1rem;
  border: none;
  box-shadow: 1px 1px 1px 1px;

  @media screen and (min-width: ${screenSize}) {
    padding: 0.5rem;
  }
`;

export const UserAccessLevelOption = styled.option``;

export const Button = styled.button`
  ${defaultButtonStyles}
  background-color: ${medium};

  &.delete-confirmation {
    background-color: red;
  }
`;

export const Icon = styled.i`
  margin: 0 0.5rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  @media screen and (min-width: ${screenSize}) {
    position: static;
  }
`;

export const NewUserLink = styled(Link)`
  ${defaultButtonStyles}
  margin: 1rem auto;
  padding: 0.75rem 2rem;
  text-decoration: none;
  cursor: pointer;
`;
