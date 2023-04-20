import styled from 'styled-components';
import { ReactComponent as SvgCrossIcon } from '../../images/icons/cross-icon.svg';

export const IngredientsShoppingListHead = styled.div`
  /* margin-bottom: 24px; */
  max-width: 343px;
  padding: 12px 14px;
  display: flex;
  gap: 24px;
  color: #fafafa;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  background-color: #8baa36;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    /* margin-bottom: 50px; */
    max-width: 704px;
    padding: 21px 32px;
    font-size: 18px;
    gap: 78px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding: 21px 40px;
    gap: 142px;
  }

  p:first-of-type {
    margin-right: auto;
  }
`;
export const IngredientsShoppingListStyled = styled.ul`
 color:${props => props.theme.mode === "light" ? "var(--body-color-dark)" : "var(--body-color-light)"};
  li{
    /* margin-bottom: 16px; */
    border-bottom: 1px solid #e0e0e0;
    border-bottom:${props => props.theme.mode === "light" ? "1px solid #e0e0e0" : "1px solid rgba(250, 250, 250, 0.3);"};
    @media screen and (min-width: 768px) {
    }
  }

  li:last-child {
    margin-bottom: 100px;

    @media screen and (min-width: 768px) {
      margin-bottom: 200px;
    }
  }

  button {
    padding: 0;
  }
`;

export const IngredientsShoppingListItem = styled.li`
  display: flex;
  align-items: center;
  max-width: 343px;

  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 24px;
  padding-top: 24px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    max-width: 704px;

    margin: 0;
    padding-bottom: 42px;
    padding-top: 45px;

    font-size: 16px;
    line-height: 1.5;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;

    margin-left: 40px;
    margin-right: 40px;
  }

  img {
    width: 48px;
    height: 100%;
    margin: 6px;

    @media screen and (min-width: 768px) {
      width: 81px;
      margin-right: 6px;
      margin-left: 6px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  p:nth-child(2) {
    margin-right: auto;
  }
`;

export const ImgWrapper = styled.div`
  background: #ebf3d4;
  border-radius: 6px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    margin-right: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ShoppingListMeasure = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
  @media screen and (min-width: 1440px) {
    gap: 10px;
    margin-right: 15px;
  }
`;

export const IngredientsShoppingListMeasureWrapper = styled.div`
  display: flex;
  width: 250px;
`;

export const IngredientsShoppingListMeasure = styled.div`
  margin-right: auto;
  margin-bottom: 0;
  padding: 4px;
  background-color: #8baa36;
  color: #fafafa;
  font-size: 10px;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;

  min-width: 37px;
  min-height: 23px;

  @media screen and (min-width: 768px) {
    min-width: 68px;
    min-height: 35px;

    padding: 4px 8px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CrossIcon = styled(SvgCrossIcon)`
  cursor: pointer;
  width: 14px;
  height: 14px;
  /* fill: none;
  stroke: ${props =>
    props.theme.mode === 'light' ? 'var(--header-grey)' : 'var(--font-white)'};

  transition: stroke var(--transition-dur-and-func); */

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
