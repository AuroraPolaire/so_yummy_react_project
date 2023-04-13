import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeItem = styled.li`
  position: relative;
  cursor: pointer;
  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media @media screen and (min-width: 768px) and (max-width: 1439px) {
    &:nth-child(odd) {
      margin-right: 30px;
    }
    :not(:nth-last-child(-n + 2)) {
      margin-bottom: 32px;
    }
  }
  @media @media screen and (min-width: 1440px) {
  }
  &:hover,
  &:focus {
    p {
      overflow: rotate-50-1 1.5s infinite 'visible' : 'hidden')};
      animation: rotate-50-1 1.5s infinite 'ticker 9s linear infinite' : ''};
      position: rotate-50-1 1.5s infinite ? 'absolute' : '')};
      left: rotate-50-1 1.5s infinite ? '307px' : '')};
      @keyframes ticker {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-200%, 0);
        }
      }
    }
  }
`;

export const RecipeLink = styled(Link)``;

export const RecipeWrapper = styled.div`
  &:hover,
  :focus {
    transform: scale(1.05);
    transition: all 250ms linear 0s;
  }
`;

export const RecipeImage = styled.img`
  width: 343px;
  height: 323px;
  border-radius: 8px;
 @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const RecipeTitleContainer = styled.div`
  width: 307px;
  height: 52px;
  border-radius: 8px;
  background-color: #FFFFFF;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 268px;
  }
`;

export const RecipeTitleName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3E4462;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
`;