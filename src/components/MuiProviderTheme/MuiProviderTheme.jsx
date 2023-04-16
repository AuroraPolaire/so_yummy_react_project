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
  },
});
export default ThemeProviderTheme;
