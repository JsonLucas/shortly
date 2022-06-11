import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    .active-initial-link{
        color: #5D9040;
    }
    .inactive-initial-link{
        color: #9C9C9C;
    }
`; 

export default GlobalStyle;