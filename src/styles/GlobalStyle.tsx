import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        font-family: "Inter", sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
