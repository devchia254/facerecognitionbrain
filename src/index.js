import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./controllers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));

// TAKE NOTE: Changing 'controllers' folder name to anything like 'containers' screws up when pushing codebase to Heroku server. I don't why yet...

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
