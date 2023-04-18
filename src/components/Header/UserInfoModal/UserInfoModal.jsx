import * as React from 'react';
import { Formik, Field } from 'formik';
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
  Form,
  EditUserInput,
  EditUserlFileLabel,
  EditUserNameInput,
  EditUserNameLabel,
  EditSubmitButton,
} from './UserInfoModal.styled';

import { updateValidationSchema, SUPPORTS } from './ValidationUpdateUser';

const UserInfoModal = ({ closeUserInfoModal, avatarURL, name }) => {
  const [avatar, setNewAvatar] = useState(avatarURL);
  const [newName, setNewName] = useState(name);
  const dispatch = useDispatch();

  const onAvatarChange = e => {
    const [file] = e.target.files;
    setNewAvatar(URL.createObjectURL(file));
  };

  const onNameChange = e => {
    setNewName(e.target.value);
  };

  const initialValues = {
    avatar: '',
    name: name,
  };

  const clickOnSubmit = async (values, { setSubmitting }) => {
    // e.preventDefault();
    // const files = e.target.elements[0].files[0];

    const formData = new FormData();
    values.avatar && formData.append('avatar', values.avatar);
    formData.append('name', values.name);
    // files && formData.append('avatar', files);
    // newName ? formData.append('name', newName) : formData.append('name', name);

    dispatch(updateUser(formData))
      .unwrap()
      .then(res => {
        notiflix.Notify.success(
          'You have successfully updated your information!'
        );
      })
      .catch(e => {
        notiflix.Notify.failure('Size of image is too large!');
      });
    closeUserInfoModal();
    setSubmitting(false);
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
        <Formik
          initialValues={initialValues}
          validationSchema={updateValidationSchema}
          onSubmit={clickOnSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* // <EditUserForm onSubmit={clickOnSubmit}> */}
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
                  as={Field}
                  type={'file'}
                  accept={SUPPORTS.join(',')}
                  onChange={onAvatarChange}
                />
                <AddIcon sx={{ fontSize: 18, fill: 'white' }} />
              </EditUserlFileLabel>

              <EditUserNameLabel>
                <PermIdentityIcon />
                <EditUserNameInput
                  as={Field}
                  type="text"
                  name="name"
                  // pattern="[A-Za-z]{1,32}"
                  value={newName}
                  onChange={onNameChange}
                />
                <CreateIcon />
              </EditUserNameLabel>

              <EditSubmitButton
                type="submit"
                disabled={isSubmitting}
                onClick={closeUserInfoModal}
              >
                Save changes
              </EditSubmitButton>
            </Form>
            // {/* </EditUserForm> */}
          )}
        </Formik>
      </DialogContent>
    </div>
  );
};

export default UserInfoModal;
