import * as React from 'react';
// import * as Yup from 'yup';
import notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/auth/authOperations';

import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {
  EditUserForm,
  EditUserInput,
  EditUserlFileLabel,
  EditUserNameInput,
  EditUserNameLabel,
  EditSubmitButton,
} from './UserInfoModal.styled';

const UserInfoModal = ({ closeUserInfoModal, avatarURL, name }) => {
  // const [avatarError, setAvatarError] = useState('');
  // const [nameError, setNameError] = useState('');

  const [avatar, setNewAvatar] = useState(avatarURL);
  const [newName, setNewName] = useState(name);
  const dispatch = useDispatch();

  // const schema = Yup.string()
  //   .min(3, 'Too Short!')
  //   .max(40, 'Must be 40 characters or less')
  //   .required('Required')
  //   .matches(
  //     /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  //     'Name may contain only letters, apostrophe, dash and spaces.'
  //   );

  const onAvatarChange = e => {
    const [file] = e.target.files;
    setNewAvatar(URL.createObjectURL(file));
  };

  const onNameChange = e => {
    setNewName(e.target.value);
  };

  const clickOnSubmit = async e => {
    e.preventDefault();
    const files = e.target.elements[0].files[0];

    const formData = new FormData();
    files && formData.append('avatar', files);
    newName ? formData.append('name', newName) : formData.append('name', name);

    dispatch(updateUser(formData))
      .unwrap()
      .then(res => closeUserInfoModal)
      .catch(e => {
        notiflix.Notify.failure('Size of image is too large!');
      });
  };

  return (
    <div>
      <IconButton
        aria-label="close"
        onClick={closeUserInfoModal}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: '60px' }}>
        <EditUserForm onSubmit={clickOnSubmit}>
          <Avatar
            sx={{
              height: { xs: 103, sm: 103, md: 103 },
              width: { xs: 103, sm: 103, md: 103 },
              ml: 'auto',
              mr: 'auto',
              mb: '52px',
            }}
            src={avatar}
          />

          <EditUserlFileLabel>
            <EditUserInput
              type={'file'}
              accept={'image/jpeg,image/png,image/gif'}
              onChange={onAvatarChange}
            />
            <AddIcon sx={{ fontSize: 18, fill: 'white' }} />
          </EditUserlFileLabel>

          {/* {avatarError && (
            <div style={{ color: 'red', marginBottom: '10px' }}>
              {avatarError}
            </div>
          )} */}

          <EditUserNameLabel>
            <PermIdentityIcon />
            <EditUserNameInput
              type="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={newName}
              onChange={onNameChange}
            />
            <CreateIcon />
          </EditUserNameLabel>

          {/* {nameError && (
            <div style={{ color: 'red', marginBottom: '10px' }}>
              {nameError}
            </div>
          )} */}

          <EditSubmitButton onClick={closeUserInfoModal}>
            Save changes
          </EditSubmitButton>
        </EditUserForm>
      </DialogContent>
    </div>
  );
};

export default UserInfoModal;
