import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

const isMobileBrowserMode = () => {
  let check = false;
  return check;
};

const Modal = ({ children, onBurgerClose }) => {
  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onBurgerClose();
    }
  };
  const handleScroll = e => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onBurgerClose();
      }
    };
    const isMobileDevice = isMobileBrowserMode();
    if (!isMobileDevice) {
      window.addEventListener('scroll', handleScroll);
    } else {
      body.classList.add('openModal');
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      const isMobileDevice = isMobileBrowserMode();
      if (!isMobileDevice) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        body.classList.remove('openModal');
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onBurgerClose]);

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <StyledModal>{children}</StyledModal>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
