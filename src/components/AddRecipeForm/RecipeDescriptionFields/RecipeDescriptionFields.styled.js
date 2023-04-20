import styled from 'styled-components';
import { ReactComponent as defaultPhoto } from '../../../images/icons/default-photo.svg';
import { Field } from 'formik';

export const RecipeDescriptionContainer = styled.div`
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
   @media screen and (max-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    width: 704px;
    height: 268px;
    margin-bottom: 100px;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
      width: 393px;
      height: 43px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 1,5;
    color: #000000;
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
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
  position: relative;
  display: block;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
    @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DefaultPhotoIcon = styled(defaultPhoto)`
  width: 279px;
  height: 268px;
  border-radius: 8px;
      @media screen and (min-width: 1440px) {
        width: 357px;
        height: 344px;
      }

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
  min-height: 40px;
  margin-bottom: 24px;
  border-bottom: 1px solid;
  border-bottom-color: ${props => (props.isError ? 'red' : 'black')};

  @media screen and (min-width: 768px) {
      width: 393px;
      min-height: 43px;
      margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }

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

    @media screen and (min-width: 768px) {
      font-size: 16px;
  }

  }

  /* select {
    .slot {
      max-height: 100px;
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
    }

    &:focus {
      border: none;
    }
  } */
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
