import React from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  MobileContainer,
  HeaderLogoWrapper,
  NavBurgerClose,
  NavBurgerCloseIcon,
  ThemeTogglerWrap,
  StyledModal,
  Overlay,
} from './BurgerMenu.styled';

const MobileMenu = ({ onBurgerClose }) => {
  const modalRoot = document.querySelector('#modal-root');
  useEffect(() => {
    // // check if modalRoot exists
    // if (!modalRoot) {
    //   console.error('Modal error: modalRoot not found in the document.');
    //   return;
    // }
    // // create the modal container element
    // const StyledModal = document.createElement('div');
    // // append the container to the modal root
    // modalRoot.appendChild(StyledModal);
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  const handleEsc = e => {
    if (e.code === 'Escape') {
      onBurgerClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onBurgerClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <StyledModal>
        <MobileContainer>
          <HeaderLogoWrapper>
            <Logo onBurgerClose={onBurgerClose} />
          </HeaderLogoWrapper>

          <NavBurgerClose type="button" onClick={onBurgerClose}>
            <NavBurgerCloseIcon />
          </NavBurgerClose>

          <Navigation onBurgerClose={onBurgerClose} />
          <ThemeTogglerWrap>
            <ThemeToggler />
          </ThemeTogglerWrap>
        </MobileContainer>
      </StyledModal>
    </Overlay>,
    modalRoot
  );
};
export default MobileMenu;
// const MobileMenu = ({ isShown, onBurgerClose }) => {
//   return (
//     <MobileContainer isShown={isShown}>
//       <HeaderLogoWrapper>
//         <Logo onBurgerClose={onBurgerClose} />
//       </HeaderLogoWrapper>

//       <NavBurgerClose type="button" onClick={onBurgerClose}>
//         <NavBurgerCloseIcon />
//       </NavBurgerClose>

//       <Navigation onBurgerClose={onBurgerClose} />
//       <ThemeTogglerWrap>
//         <ThemeToggler />
//       </ThemeTogglerWrap>
//     </MobileContainer>
//   );
// };

// export default MobileMenu;
