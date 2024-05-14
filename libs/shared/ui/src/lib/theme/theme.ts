import { createGlobalStyle } from 'styled-components';

export const theme = {
  breakpoints: {
    laptop: "1025px",   //min
    tablet: "1024px",   //max
    mobile: "767px"     //max
  },
  colors: {
    dark: '#343a40',
    johnstonBlack: "03071C",
    lightgrey: "lightgrey"
  },
};

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/museo-sans-rounded');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Museo Sans Rounded", sans-serif;
    background-color: white;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;