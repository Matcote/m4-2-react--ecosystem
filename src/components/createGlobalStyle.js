import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
    margin: 0 10px;
  }
  p{
    line-height: 2;
  }
  .selected{
    border-bottom: 3px solid red;
    span{
      color: red;
    }
  }
`;
export default GlobalStyles;
