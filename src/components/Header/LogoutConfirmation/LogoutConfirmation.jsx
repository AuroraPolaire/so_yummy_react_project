import * as React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import {
  LogoutButtonStyled,
  CancelButtonStyled,
  ButtonsContainerStyled,
  LogoutModalText,
  LogoutModalContainerStyled,
} from './LogoutConfirmation.styled';

const LogoutConfirmation = ({ onLogoutClose }) => {
  const dispatch = useDispatch();
  const onLogoutUser = () => {
    dispatch(logout());
  };
  return (
    <LogoutModalContainerStyled>
      <IconButton
        aria-label="close"
        onClick={onLogoutClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <LogoutModalText>Are you sure you want to log out?</LogoutModalText>

      <ButtonsContainerStyled>
        <LogoutButtonStyled onClick={onLogoutUser}>Log out</LogoutButtonStyled>

        <CancelButtonStyled onClick={onLogoutClose}>Cancel</CancelButtonStyled>
      </ButtonsContainerStyled>
    </LogoutModalContainerStyled>
  );
};

export default LogoutConfirmation;
