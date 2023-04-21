import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import {
  selectUser,
  selectIsLoggedIn,
} from '../../../redux/auth/authSelectors';

import { ReactComponent as DefaultAvatar } from '../../../images/icons/default-avatar.svg';
import {
  EditWrapper,
  UserAvatarWrapper,
  UserLogoButton,
  UserName,
  UserNameWrapper,
} from './UserLogo.styled';

import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutConfirmation from '../LogoutConfirmation/LogoutConfirmation';

import { Dialog, Popper, ClickAwayListener, Paper } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

import { LogoutBtn } from '../UserLogo/UserLogo.styled';
import { useTheme } from 'styled-components';

const UserLogo = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatarURL } = useSelector(selectUser);

  const [userLogoModalOpen, setUserLogoModalOpen] = useState(false);
  const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
  const theme = useTheme();

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
          <Tooltip title="You may update your information here">
            <UserLogoButton
              id="user-logo-button"
              type="button"
              onClick={onUserLogoClick}
            >
              <UserAvatarWrapper>
                <Avatar
                  alt="avatar"
                  src={avatarURL || DefaultAvatar}
                  sx={{
                    height: { xs: 34, sm: 40, md: 44 },
                    width: { xs: 34, sm: 40, md: 44 },
                  }}
                />
                {/* <UserAvatar
                  style={{
                    backgroundImage: `url(${avatarURL})`,
                  }}
                ></UserAvatar> */}
              </UserAvatarWrapper>

              <UserNameWrapper>
                <UserName>{name || 'User name'}</UserName>
              </UserNameWrapper>
            </UserLogoButton>
          </Tooltip>

          <Popper open={popperOpen} anchorEl={anchorEl} placement="bottom">
            <ClickAwayListener onClickAway={onUserLogoClose}>
              <Paper
                style={{
                  width: isTablet ? '177px' : '161px',
                  height: isTablet ? '134px' : '130px',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #8BAA36',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  marginTop: isTablet ? 15 : 14,
                  backgroundColor: theme.mode === "light" ? "var(--body-color-light)" : "var(--body-color-dark)",
                }}
              >
                <EditWrapper onClick={onUserInfoOpen}>
                  Edit profile
                  <EditIcon sx={{ fontSize: 18 }} />
                </EditWrapper>

                <LogoutBtn onClick={onLogoutOpen}>
                  Log out <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </LogoutBtn>
              </Paper>
            </ClickAwayListener>
          </Popper>
        </>
      )}

      <Dialog open={userInfoModalOpen} onClose={onUserInfoClose}>
        <UserInfoModal
          avatarURL={avatarURL}
          name={name}
          closeUserInfoModal={onUserInfoClose}
        />
      </Dialog>

      <Dialog open={logoutConfirmationOpen} onClose={onLogoutClose}>
        <LogoutConfirmation closeLogoutModal={onLogoutClose} />
      </Dialog>
    </>
  );
};

export default UserLogo;
