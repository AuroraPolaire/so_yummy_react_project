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
  UserLogoBox,
  UserName,
  UserNameWrapper,
} from './UserLogo.styled';

const UserLogo = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatarURL } = useSelector(selectUser);

  return (
    <>
      {isLoggedIn && (
        <UserLogoBox onClick={openProfile}>
          <UserAvatarWrapper>
            <UserAvatar
              style={{ backgroundImage: `url(${avatarURL})` }}
            ></UserAvatar>
          </UserAvatarWrapper>

          <UserNameWrapper>
            <UserName>{name || 'UserName'}</UserName>
          </UserNameWrapper>
        </UserLogoBox>
      )}
      {isProfileOpen && (
        <div onClose={closeProfile} name={name} avatar={avatarURL} />
      )}
    </>
  );
};

export default UserLogo;
