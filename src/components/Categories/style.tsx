import styled, { css } from 'styled-components';
import { dark, defaultButtonStyles, medium, screenSize } from '../../utils/styleUtils';

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  padding: 0 0.125rem;

  @media screen and (min-width: ${screenSize}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const CategoryContainer = styled.div`
  background-color: white;
  padding: 0.25rem 0.125rem;
  box-shadow: 0px 1px 5px rgb(129, 129, 129);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

const inputStyle = css`
  background-color: inherit;
  max-width: 40vw;
  border: none;

  &.editable {
    border: 1px dotted ${dark};
  }

  &.not-editable {
    &:focus {
      outline: none;
    }
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${dark};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const Title = styled.input`
  ${inputStyle}
  font-weight: bold;
  font-size: 1rem;

  @media screen and (min-width: ${screenSize}) {
    font-size: 1.15rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const LabelValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.input`
  ${inputStyle}
`;

export const Value = styled.input`
  ${inputStyle}
  text-align: right;

  &.editable {
    text-align: left;
  }
`;

export const TrashIcon = styled.button`
  background-color: inherit;
  border: none;
`;

export const NewItemButton = styled.button`
  ${defaultButtonStyles}
  background-color: ${medium};
  margin: auto auto 0 auto;
  padding: 0.5rem 1rem;
`;

export const NewCategoryButton = styled.button`
  ${defaultButtonStyles}
  background-color: ${medium};
  margin: 0 2rem;

  @media screen and (min-width: ${screenSize}) {
    margin: 0 auto;
  }
`;
