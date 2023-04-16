// import React, { useState, useRef, useEffect } from 'react';
// import { Popper } from '@mui/material';
// import { makeStyles } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';

// import LogoutBtn from './UserLogoModal.styled';
// import {
//   UserLogoModalWrapper,
//   EditButton,
//   EditIconStyled,
// } from './UserLogoModal.styled';

// const UserLogoModal = () => {
//   <></>;
// };
// export default UserLogoModal;

// const UserLogoModal = ({
//   isShown,
//   closeUserLogoModal,
//   openUserInfoModal,
//   openLogoutConfirmationModal,
// }) => {
//   const onEditBtnClick = () => {
//     closeUserLogoModal();
//     openUserInfoModal();
//   };

//   const onLogoutBtnClick = () => {
//     openLogoutConfirmationModal();
//     closeUserLogoModal();
//   };

//   return (
//     <UserLogoModalWrapper isShown={isShown}>
//       <EditButton type="button" onClick={onEditBtnClick}>
//         <EditIconStyled width={'14px'} height={'14'} />
//       </EditButton>

//       <LogoutBtn onLogoutClick={onLogoutBtnClick} />
//     </UserLogoModalWrapper>
//   );
// };

// export default UserLogoModal;

// import React, { useState, useRef, useEffect } from 'react';
// import { Popper } from '@mui/material';
// import { makeStyles } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';

// import { logout } from 'redux/auth/authOperations';
// import { selectUser } from '../../../redux/auth/authSelectors';
// import { LogoutBtn } from './UserLogoModal.styled';
// import LogoutConfirmation from '../LogoutConfirmation/LogoutConfirmation';

// import Menu from '@mui/material/Menu';
// import Avatar from '@mui/material/Avatar';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import EditIcon from '@mui/icons-material/Edit';
// import Dialog from '@mui/material/Dialog';

// export const UserLogoModal = () => {
//   const { name, avatarURL } = useSelector(selectUser);
//   const user = useSelector(selectUser);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const onOpenUserMenu = event => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const onCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const [open, setOpen] = useState(false);

//   const onClickOpenEditProfile = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const [openAlert, setOpenAlert] = useState(false);

//   const onClickOpenAlert = () => {
//     setOpenAlert(true);
//   };
//   const onCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   return (
//     <>
//       <Box sx={{ display: { xs: 'flex', md: 'flex', alignItems: 'center' } }}>
//         <Tooltip title="Open settings">
//           <IconButton onClick={onOpenUserMenu} onClose={onCloseUserMenu}>
//             <Avatar
//               alt="avatar"
//               src={avatarURL}
//               sx={{
//                 height: { xs: 34, sm: 40, md: 44 },
//                 width: { xs: 34, sm: 40, md: 44 },
//               }}
//             />
//           </IconButton>
//         </Tooltip>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             color: '#22252A',
//             textDecoration: 'none',
//             fontFamily: 'Poppins, sans-serif',
//           }}
//         >
//           {user.name}
//         </Typography>
//       </Box>

//       <Menu
//         anchorEl={anchorElUser}
//         id="account-menu"
//         open={Boolean(anchorElUser)}
//         onClose={onCloseUserMenu}
//         sx={{ p: 0 }}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             p: '18px',
//             border: '1px solid #8BAA36',
//             boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//             mt: 1.5,
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem
//           onClick={onClickOpenEditProfile}
//           sx={{
//             mb: '32px',
//             p: 0,
//             display: {
//               xs: 'flex',
//               md: 'flex',
//               justifyContent: 'space-between',
//             },
//           }}
//         >
//           Edit profile
//           <EditIcon sx={{ ml: '53px' }} />
//         </MenuItem>

//         <Dialog open={open} onClose={onClose}>
//           <FormDialog user={name} avatar={avatarURL} onClose={onClose} />
//         </Dialog>

//         <MenuItem>
//           <LogoutBtn onClick={onClickOpenAlert}>
//             Logout <ArrowForwardIcon sx={{ fontSize: 18 }} />
//           </LogoutBtn>

//           <Dialog open={openAlert} onClose={onCloseAlert}>
//             <LogoutConfirmation onClose={onCloseAlert} />
//           </Dialog>
//         </MenuItem>
//       </Menu>
//     </>
//   );
// };

// export default UserLogoModal;
// {
//   /* <LogoutBtn
//           onClick={() => {
//             dispatch(logout());
//           }}
//         >
//           Log out
//         </LogoutBtn> */
// }

// // // export default UserLogoModal;
