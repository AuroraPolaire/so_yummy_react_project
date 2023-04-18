import styled from 'styled-components';
import { ReactComponent as defaultPhoto } from '../../../images/icons/default-photo.svg';
import { Field } from 'formik';

export const RecipeDescriptionContainer = styled.div`
  margin: 0 auto 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  position: relative;
  width: 343px;
  height: 40px;
  margin: 0 auto 24px;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: ${props => (props.isError ? 'red' : 'black')};
  background-color: transparent;

  /* @media screen and (min-width: 768px) {
  font-size: 32px;
  padding-top: 102px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-top: 102px;
  } */

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 1, 5;
    color: #000000;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
  display: block;
  width: 343px;
`;

export const RelativeContainerPlaceholder = styled(Field)``;

// ----FILE INPUT WITH SVG------
export const FileUploadLabel = styled.label`
  display: block;
  width: 279px;
  height: 268px;
  margin-bottom: 32px;
  border-radius: 8px;
  cursor: pointer;
`;

export const DefaultPhotoIcon = styled(defaultPhoto)`
  width: 279px;
  height: 268px;
  border-radius: 8px;

  rect {
    fill: #8baa36;
  }

  path:nth-of-type(2) {
    fill: #fafafa;
    transition: fill 250ms linear;
  }

  path:first-of-type {
    stroke: #fafafa;
    transition: fill 250ms linear;
  }

  :hover rect,
  :focus rect {
    fill: #8baa36;
    filter: brightness(0.8);
  }
`;

export const StyledImageInput = styled.input.attrs({
  'aria-label': 'Choose file',
})`
  display: none;
`;

// ---- SELECT -------
export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 343px;
  height: 40px;
  margin-bottom: 24px;
  border-bottom: 1px solid;
  border-bottom-color: ${props => (props.isError ? 'red' : 'black')};

  label {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 1, 5;
    color: #000000;
    opacity: 0.5;
  }

  select {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 85px;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    border: none;
    background-color: transparent;
    outline: 0;
    /* -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none; */

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
    }

    &:focus {
      border: none;
    }
  }
`;

// ------ERROR ------
export const StyledErrorMessage = styled.span`
  position: absolute;
  top: ${props => {
    switch (props.type) {
      case 'input':
        return 0;

      case 'select':
        return '20px';

      default:
        return;
    }
  }};
  right: ${props => {
    switch (props.type) {
      case 'input':
        return 0;

      case 'select':
        return;

      default:
        return;
    }
  }};
  left: ${props => {
    switch (props.type) {
      case 'input':
        return;

      case 'select':
        return 0;

      default:
        return;
    }
  }};
  font-family: 'Poppins';
  color: red;
  font-size: 14px;
  line-height: 1, 5;
`;
