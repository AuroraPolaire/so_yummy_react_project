import * as React from 'react';
import notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/auth/authOperations';
import * as Yup from 'yup';

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
import { Field, Formik } from 'formik';

const UserInfoModal = ({ closeUserInfoModal, avatarURL, name }) => {
  const [avatar, setNewAvatar] = useState(avatarURL);
  const [fileAvatar, setNewFileAvatar] = useState('');
  const [newName, setNewName] = useState(name);
  const dispatch = useDispatch();

  const clickOnSubmit = () => {
    const formData = new FormData();
    fileAvatar && formData.append('avatar', fileAvatar);
    newName ? formData.append('name', newName) : formData.append('name', name);

    dispatch(updateUser(formData))
      .unwrap()
      .then(res => closeUserInfoModal)
      .catch(e => {
        notiflix.Notify.failure('Size of image is too large!');
      });
  };

  const editSchema = Yup.object().shape({
    file: Yup.object().shape({
      name: Yup.string(),
    }),
    name: Yup.string('Only Latin Letters!')
      .matches(/^([^0-9]*)$/, 'No numbers allowed!')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
  });

  return (
    <>
      <Formik
        initialValues={{
          avatar: avatar,
          name: newName,
        }}
        validationSchema={editSchema}
        onSubmit={values => {}}
      >
        {({ errors, handleSubmit, setFieldValue }) => (
          <>
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
              <EditUserForm onSubmit={handleSubmit}>
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
                    name="image"
                    type={'file'}
                    accept={'image/jpeg,image/png,image/gif'}
                    onChange={event => {
                      setFieldValue('avatar', event.currentTarget.files[0]);
                      setNewAvatar(
                        URL.createObjectURL(event.currentTarget.files[0])
                      );
                      setNewFileAvatar(event.currentTarget.files[0]);
                    }}
                  />
                  <AddIcon sx={{ fontSize: 18, fill: 'white' }} />
                  {errors.image ? <div>{errors.image}</div> : null}
                </EditUserlFileLabel>
                <EditUserNameLabel>
                  <PermIdentityIcon />
                  <EditUserNameInput
                    as={Field}
                    type="text"
                    name="name"
                    onChange={e => {
                      setFieldValue('name', e.target.value);
                      setNewName(e.target.value);
                    }}
                  />
                  {errors.name ? (
                    <div
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
                    >
                      {errors.name}
                    </div>
                  ) : null}
                  <CreateIcon />
                </EditUserNameLabel>
                <EditSubmitButton
                  type="submit"
                  onClick={() => {
                    closeUserInfoModal();
                    clickOnSubmit();
                  }}
                >
                  Save changes
                </EditSubmitButton>
              </EditUserForm>
            </DialogContent>
          </>
        )}
      </Formik>
    </>
  );
};

export default UserInfoModal;
