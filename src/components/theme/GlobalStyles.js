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
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

html {
  scroll-behavior: smooth;
}

`;