import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import App from "components/App/App";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "hooks/useStore";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import font from "figlet/importable-fonts/Standard.js";
import figlet from "figlet";
import { configure } from "mobx";
import "./assets/css/custom.less";
import ReactGA from "react-ga";
import { enableLogging } from "mobx-color-logger";
import initReactFastclick from "react-fastclick";

initReactFastclick();
configure({
  useProxies: "never",
  enforceActions: "observed"
});

figlet.parseFont("Standard", font);
figlet.text(
  "Hello. JW",
  {
    font: "Standard"
  },
  function (err, data) {
    console.log(data);
  }
);

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
  console.log = function no_console() {};
  ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode");

  enableLogging({
    predicate: () => true,
    action: true,
    reaction: false,
    transaction: true,
    compute: true
  });
}

// const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <HelmetProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
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
