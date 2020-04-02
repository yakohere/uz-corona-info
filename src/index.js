import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "./components/News";
import axios from "axios";

axios.defaults.baseURL = "https://www.trackcorona.live/api/countries/";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  request => {
    console.log(request);
    // Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log(response);
    // Edit request config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/malumot" exact component={About} />
        <Route path="/news" exact component={News} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
