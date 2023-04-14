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
          '&.Mui-selected': {
            color: '#8BAA36',
            fontFamily: 'Poppins',
          },
        },
      },
    },
  },
});
export default ThemeProviderTheme;
