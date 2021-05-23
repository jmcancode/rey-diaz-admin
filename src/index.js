import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-datetime/css/react-datetime.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { AuthProvider } from "./firebase/context";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorkerRegistration.register();
