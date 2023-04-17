import styled, { keyframes } from 'styled-components';

import BurgerBgMobile from '../../../images/bg/mobile-modal-bg.webp';
import BurgerBgMobile2x from '../../../images/bg/mobile-modal-bg@2x.webp';
import BurgerBgTablet from '../../../images/bg/tablet-modal-bg.webp';
import BurgerBgTablet2x from '../../../images/bg/tablet-modal-bg@2x.webp';

import { ReactComponent as SvgExit } from '../../../images/icons/exit.svg';

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1
  }
`;

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--light-green);
  background-image: url(${BurgerBgMobile});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  z-index: 10000;
  animation: ${p => (p.isShown ? slideDown : slideDown)} 500ms ease-in-out
    ${p => (p.isShown ? '0ms' : '250ms')} forwards;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BurgerBgMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${BurgerBgTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BurgerBgTablet2x});
    }

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;

export const HeaderLogoWrapper = styled.div`
  position: absolute;
  top: 18px;
  left: 16px;

  @media screen and (min-width: 768px) {
    top: 18px;
    left: 32px;
  }
`;

export const NavBurgerClose = styled.button`
  position: absolute;
  z-index: 10;
  top: 22px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 32px;
  }
`;

export const NavBurgerCloseIcon = styled(SvgExit)`
  cursor: pointer;
  stroke: var(--font-gray);
  width: 24px;
  height: 24px;
  transition: color var(--transition-dur-and-func);

  &:hover,
  &:focus {
    stroke: var(--accent-color-green);
  }
`;

export const ThemeTogglerWrap = styled.div`
  position: absolute;
  bottom: 18px;
  left: 16px;

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;
  }
`;
