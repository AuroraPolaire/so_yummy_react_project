import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Time from 'components/Time/Time';
import { ReactComponent as IconDelete } from './../../images/icons/icon-delete.svg';

export const DeleteSvg = styled(IconDelete)`
  width: 18px;
  height: 22px;

  stroke: ${props => {
    switch (props.type) {
      case 'favorite':
        return `#22252a`;

      case 'my':
        return '#FAFAFA';

      default:
        return;
    }
  }};

  /* @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  } */
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

    color: #23262a;

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
export const StyledLink = styled(NavLink)`
  background-color: ${props => {
    switch (props.type) {
      case 'favorite':
        return `#22252A`;

      case 'my':
        return '#8BAA36';

      default:
        return;
    }
  }};
  display: inline-block;
  color: #fafafa;
  border-radius: 24px 44px;
  text-decoration: none;
  padding: 14px 38px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 6px 14px;
  }
`;

export const StyledTime = styled(Time)`
  p {
    color: red;
    font-weight: bold;
  }
`;
