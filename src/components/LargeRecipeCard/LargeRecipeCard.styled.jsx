import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { ReactComponent as IconDelete } from './../../images/icons/icon-delete.svg';
import { ReactComponent as camera } from './../../images/icons/camera.svg';

export const DeleteSvg = styled(IconDelete)`
  width: 18px;
  height: 22px;

  stroke: ${props => {
    switch (props.type) {
      case 'favorite':
        return `var(--font-gray)`;

      case 'my':
        return `var(--font-white)`;

      default:
        return;
    }
  }};
`;

export const RecipeCardBox = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  background-color: #ffffff;

  @media screen and (max-width: 1440px) {
    gap: 24px;
    padding: 28px;

    .description-text:not(:first-child) {
      display: none;
    }
    .description-text {
      max-height: 55px;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 14px;
    padding: 14px;

    .description-text:not(:first-child) {
      display: none;
    }
    .description-text {
      max-height: 95px;
      overflow: hidden;
    }
  }

  & .description-conainer {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    position: relative;

    @media screen and (max-width: 1440px) {
      gap: 28px;
    }
    @media screen and (max-width: 768px) {
      gap: 14px;
    }
  }

  & .btn-conainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  & img {
    display: block;
    width: 318px;
    border-radius: 8px;
    margin: 0;

    @media screen and (max-width: 1440px) {
      width: 228px;
      height: 232px;
    }
    @media screen and (max-width: 768px) {
      width: 124px;
      height: 124px;
    }
  }

  & .description {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    padding-right: 120px;

    color: var(--font-gray);

    @media screen and (max-width: 1440px) {
      padding-right: 100px;
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      padding-right: 43px;
      font-size: 8px;
    }
  }

  & h3 {
    color: #3e4462;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 1440px) {
    }
  }
`;
export const StyledLink = styled.button`
  background-color: ${props => {
    switch (props.page) {
      case 'favorite':
        return `var(--font-gray)`;

      case 'my':
        return `var(--accent-color-green)`;

      default:
        return;
    }
  }};
  display: inline-block;
  color: var(--font-white);
  border-radius: 24px 44px;
  text-decoration: none;
  padding: 14px 38px;
  transition: background-color var(--transition-dur-and-func);
  border: none;

  :hover,
  :active,
  :focus {
    cursor: pointer;
    background-color: ${props => {
      switch (props.page) {
        case 'favorite':
          return `var(--accent-color-green)`;

        case 'my':
          return `var(--accent-color-gray)`;

        default:
          return;
      }
    }};
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 6px 14px;
  }
`;

export const DefaultPhotoIcon = styled(camera)`
  width: 151px;
  height: 124px;
  padding: 45px;
  border-radius: 8px;
  fill: #fafafa;
  background-color: rgb(217, 217, 217);
  @media screen and (min-width: 768px) {
    padding: 50px 80px;
    width: 268px;
    height: 232px;
  }
      @media screen and (min-width: 1440px) {
        padding: 100px 120px;
        width: 353px;
        height: 318px;
      }
    path:nth-child(1) {
      stroke: #fafafa;
    }
`;