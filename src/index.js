import React from "react";
import ReactDOM from "react-dom";

//import css in order
import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "lightbox2/dist/css/lightbox.min.css";
import "./style.css";
import Particles from "react-particles-js";
import particles from "./const/particle";
//import js libraries
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";

import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';


import App from "./components/App";


ReactGA.initialize('UA-162185151-2'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.Fragment>
    <Particles params={particles} className="particle" />
      <App/>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
