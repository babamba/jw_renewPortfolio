import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import App from "@components/App/App";
import { render } from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import font from "figlet/importable-fonts/Standard.js";
import figlet from "figlet";
import "./assets/css/custom.less";
import ReactGA from "react-ga";
import initReactFastclick from "react-fastclick";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";

import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "./store/root";

initReactFastclick();
figlet.parseFont("Standard", font);
figlet.text(
  "Hello. JW",
  {
    font: "Standard"
  },
  (err, data) => console.log(data)
);

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
  console.log = function no_console() {};
  ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode");
}

const queryClient = new QueryClient();

render(
  <BrowserRouter>
    <HelmetProvider>
      <ReduxProvider store={reduxStore}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </QueryClientProvider>
      </ReduxProvider>
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
