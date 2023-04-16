import * as React from 'react';
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
  // const userData = useSelector(selectUser);
  // console.log(userData);
  const [newAvatar, setNewAvatar] = useState(avatarURL);
  const [newName, setNewName] = useState(name);
  const dispatch = useDispatch();

  const previewOnChangeImg = e => {
    const [file] = e.target.files;
    if (file) {
      setNewAvatar(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const files = e.target.elements[0].files[0];

    const formData = new FormData();

    files && formData.append('avatar', files);
    newName ? formData.append('name', newName) : formData.append('name', name);

    // if (files) {
    //   formData.append('avatar', files);
    // }
    // if (newName) {
    //   formData.append('name', newName);
    // }

    dispatch(updateUser(formData))
      .unwrap()
      .then(res => closeUserInfoModal)
      .catch(e => {
        'додати обробку помилки';
      });
  };

  const nameOnChange = e => {
    setNewName(e.target.value);
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
        <EditUserForm onSubmit={handleOnSubmit}>
          <Avatar
            sx={{
              height: { xs: 103, sm: 103, md: 103 },
              width: { xs: 103, sm: 103, md: 103 },
              ml: 'auto',
              mr: 'auto',
              mb: '52px',
            }}
            src={avatarURL ? avatarURL : newAvatar}
          />
          <EditUserlFileLabel>
            <EditUserInput
              type={'file'}
              accept={'image/jpeg,image/png,image/gif'}
              onChange={previewOnChangeImg}
            />
            <AddIcon sx={{ fontSize: 18, fill: 'white' }} />
          </EditUserlFileLabel>
          <EditUserNameLabel>
            <PermIdentityIcon />
            <EditUserNameInput
              type="name"
              pattern="[A-Za-z0-9]{6,}"
              value={newName}
              onChange={nameOnChange}
            />
            <CreateIcon />
          </EditUserNameLabel>
          <EditSubmitButton onClick={closeUserInfoModal}>
            Save changes
          </EditSubmitButton>
        </EditUserForm>
      </DialogContent>
    </div>
  );
};

export default UserInfoModal;

// import { makeStyles } from '@mui/material/core/styles';
// import CloseIcon from '@material-ui/icons/Close';
// import EditIcon from '@material-ui/icons/Edit';

// import {
//   EditUserForm,
//   EditUserInput,
//   EditUserlFileLabel,
//   EditUserNameInput,
//   EditUserNameLabel,
//   EditSubmitButton,
// } from './UserInfoModal.styled';

// const UserInfoModal = ({ onClose, avatar, user }) => {
//   const [image, setImage] = useState(avatar);
//   const [name, setName] = useState(user);
//   const dispatch = useDispatch();

//   const previewOnChangeImg = e => {
//     const [file] = e.target.files;
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleOnSubmit = async e => {
//     e.preventDefault();
//     const files = e.target.elements[0].files[0];
//     const formData = new FormData();
//     if (files) {
//       formData.append('avatar', files);
//     }
//     if (name) {
//       formData.append('name', name);
//     }
//     console.log(name);
//     dispatch(refreshToken(formData));
//   };

//   const nameOnChange = e => {
//     setName(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <div>
//       <IconButton
//         aria-label="close"
//         onClick={onClose}
//         sx={{
//           position: 'absolute',
//           right: 8,
//           top: 8,
//           color: theme => theme.palette.grey[500],
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//       <DialogContent sx={{ p: '60px' }}>
//         <EditUserForm onSubmit={handleOnSubmit}>
//           <Avatar
//             sx={{
//               height: { xs: 103, sm: 103, md: 103 },
//               width: { xs: 103, sm: 103, md: 103 },
//               ml: 'auto',
//               mr: 'auto',
//               mb: '52px',
//             }}
//             src={image}
//           />
//           <EditUserlFileLabel>
//             <EditUserInput
//               type={'file'}
//               accept={'image/jpeg,image/png,image/gif'}
//               onChange={previewOnChangeImg}
//             />
//             <AddIcon sx={{ fontSize: 18, fill: 'white' }} />
//           </EditUserlFileLabel>
//           <EditUserNameLabel>
//             <PermIdentityIcon />
//             <EditUserNameInput
//               type="name"
//               pattern="[A-Za-z0-9]{6,}"
//               value={name}
//               onChange={nameOnChange}
//             />
//             <CreateIcon />
//           </EditUserNameLabel>
//           <EditSubmitButton onClick={onClose}>Save changes</EditSubmitButton>
//         </EditUserForm>
//       </DialogContent>
//     </div>
//   );
// };

// export default UserInfoModal;
