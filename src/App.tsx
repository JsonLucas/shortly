import { Fragment } from "react";
import GlobalStyle from "./assets/GlobalStyle";
import PageRoutes from "./routes";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <PageRoutes />
    </Fragment>
  );
}

export default App;
