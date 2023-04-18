import { createTheme } from '@mui/material/styles';

const ThemeProviderTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#8BAA36',
          height: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: '18px',
          color: '#BDBDBD',
          padding: '12px 10px 30px 10px',
          letterSpacing: 'normal',

          '&.Mui-selected': {
            color: '#8BAA36',
            fontFamily: 'Poppins',
            letterSpacing: 'normal',
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          ul: {
            padding: '14px 24px',
            backgroundColor: '#FAFAFA',
            boxShadow: '0px 4px 4px rgba(135, 135, 135, 0.2)',
            borderRadius: '26px',
          },
          button: {
            color: '#656565',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '1.5',
            '&.Mui-selected': { backgroundColor: '#EBF3D4', color: '#22252A' },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          position: 'absolute',
          right: '0',
          top: '0',
          width: '24px',
          height: '24px',
          background: '#8BAA36',
          borderRadius: '4px',
          ':hover': { background: '#b7c981' },
          '@media (min-width: 768px)': {
            width: '38px',
            height: '38px',
          },

          '@media (min-width: 1440px)': {
            width: '44px',
            height: '44px',
          },

          '&.favorite': {
            background: '#EBF3D4',
            ':hover': { background: '#b7c981' },
          },
        },
      },
    },
  },
});
export default ThemeProviderTheme;
