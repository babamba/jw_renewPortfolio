import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { render, hydrate } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { HelmetProvider } from 'react-helmet-async';
import RootStore from './store/index';
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-multi-carousel/lib/styles.css';
import './assets/css/custom.less';
import ReactGA from 'react-ga';

const rootStore = new RootStore(); // *** 루트 스토어 생성

if (process.env.NODE_ENV === 'production') {
  // console.log('enterprise', process.env.REACT_APP_ENTERPRISE);
  console.log = function no_console() {};
  ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <HelmetProvider>
      <Provider {...rootStore}>
        <App />
      </Provider>
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
