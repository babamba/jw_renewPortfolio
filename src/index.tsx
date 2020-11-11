import React from "react";
import App from "./components/App/App";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "hooks/useStore";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/custom.less";
import ReactGA from "react-ga";

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
  console.log = function no_console() {};
  ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode");
}

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <HelmetProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </HelmetProvider>
  </BrowserRouter>,
  rootElement
);

// if (rootElement !== null && rootElement.hasChildNodes()) {
//   hydrate(
//     <BrowserRouter>
//       <HelmetProvider>
//         <Provider {...rootStore}>
//           <App />
//         </Provider>
//       </HelmetProvider>
//     </BrowserRouter>,
//     rootElement
//   );
// } else {
//   render(
//     <BrowserRouter>
//       <HelmetProvider>
//         <Provider {...rootStore}>
//           <App />
//         </Provider>
//       </HelmetProvider>
//     </BrowserRouter>,
//     rootElement
//   );
// }

// ReactDOM.render(
//   // <React.StrictMode>
//   <BrowserRouter>
//     <HelmetProvider>
//       <Provider {...rootStore}>
//         <App />
//       </Provider>
//     </HelmetProvider>
//   </BrowserRouter>,
//   // </React.StrictMode>
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
