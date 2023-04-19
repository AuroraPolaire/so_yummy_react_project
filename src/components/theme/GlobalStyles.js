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
 --font-colorsecondary:#7e7e7e;
	--light-green: #ebf3d4;
	--header-grey: #23262a;
  --switches-bg:#EFEFEF;
  --line-color:#707070;

  --warning: #f6c23e;
  --error: #e74a3b;
  --correct: #3cbc81;

  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1)
}

*, *::before, *::after {
  box-sizing: border-box;
}


body {
  font-family: 'Poppins', sans-serif;
  background-color:#FAFAFA;
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

div {
  box-sizing: border-box;
}

`;
