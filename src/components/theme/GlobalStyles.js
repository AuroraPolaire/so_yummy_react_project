import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
  --accent-color-green: #8baa36;
  --accent-color-gray: #1e1f28;
  --font-white: #fafafa;
  --font-gray: #22252a;
  --font-darkblue-heading: #001833;
  --font-darkblue-p: #3e4462;
  --font-categories: #bdbdbd;

  --warning: #f6c23e;
  --error: #e74a3b;
  --correct: #3cbc81;
}

body {
  font-family: 'Poppins', sans-serif;
}

li {
  list-style: none;
}
`;
