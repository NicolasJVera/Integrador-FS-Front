import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 147px; /* Ajusta según la altura de tu navbar */
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style-type: none;
    }

    body {
      background-color: #000000;
      line-height: 1.6;
      padding-top: 120px; 
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    a:visited {
      color: inherit;
    }

    li {
      list-style: none;
    }
    
    /* Ajuste para secciones con anclas */
    section {
      scroll-margin-top: 130px; /* Mismo valor que scroll-padding-top */
    }
`;



export default GlobalStyles;
