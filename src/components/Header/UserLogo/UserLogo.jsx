import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { authReducer } from '../../../redux/auth/authSlice';
import {
  selectUser,
  selectIsLoggedIn,
} from '../../../redux/auth/authSelectors';

import {
  UserAvatar,
  UserAvatarWrapper,
  UserLogoButton,
  UserName,
  UserNameWrapper,
} from './UserLogo.styled';

// import UserLogoModal from '../UserLogoModal/UserLogoModal';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutConfirmation from '../LogoutConfirmation/LogoutConfirmation';

import {
  Dialog,
  Popper,
  ClickAwayListener,
  Paper,
  Button,
  Typography,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';

import { LogoutBtn } from '../UserLogo/UserLogo.styled';

const UserLogo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatarURL } = useSelector(selectUser);

  const [userLogoModalOpen, setUserLogoModalOpen] = useState(false);
  const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);

  const popperOpen = Boolean(userLogoModalOpen);
  const anchorEl = document.querySelector('#user-logo-button');

  const onUserLogoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserLogoModalOpen(prevOpen => !prevOpen);
  };
  const onUserLogoClose = () => {
    setUserLogoModalOpen(false);
  };

  const onUserInfoOpen = () => {
    setUserInfoModalOpen(true);
    setUserLogoModalOpen(false);
  };
  const onUserInfoClose = () => {
    setUserInfoModalOpen(false);
  };

  const onLogoutOpen = () => {
    setLogoutConfirmationOpen(true);
    setUserLogoModalOpen(false);
  };
  const onLogoutClose = () => {
    setLogoutConfirmationOpen(false);
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <UserLogoButton
            id="user-logo-button"
            type="button"
            onClick={onUserLogoClick}
          >
            <UserAvatarWrapper>
              <UserAvatar
                style={{ backgroundImage: `url(${avatarURL})` }}
              ></UserAvatar>
            </UserAvatarWrapper>

            <UserNameWrapper>
              <UserName>{name || 'UserName'}</UserName>
            </UserNameWrapper>
          </UserLogoButton>

          <Popper open={popperOpen} anchorEl={anchorEl} placement="bottom">
            <ClickAwayListener onClickAway={onUserLogoClose}>
              <Paper
                style={{
                  width: '177px',
                  height: '134px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #8BAA36',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  mt: 1.5,
                }}
              >
                <Button
                  onClick={onUserInfoOpen}
                  sx={{
                    fontSize: 14,
                    color: '#22252A',
                    textDecoration: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    p: 0,
                    display: {
                      xs: 'flex',
                      md: 'flex',
                      justifyContent: 'space-between',
                    },
                  }}
                >
                  Edit profile
                  <EditIcon sx={{ ml: '50px' }} />
                </Button>

                <LogoutBtn onClick={onLogoutOpen}>
                  Log out <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </LogoutBtn>
              </Paper>
            </ClickAwayListener>
          </Popper>
        </>
      )}

      <Dialog open={userInfoModalOpen} onClose={onUserInfoClose}>
        <UserInfoModal closeUserInfoModal={onUserInfoClose} />
      </Dialog>

      <Dialog open={logoutConfirmationOpen} onClose={onLogoutClose}>
        <LogoutConfirmation closeLogoutModal={onLogoutClose} />
      </Dialog>
    </>
  );
};

export default UserLogo;
