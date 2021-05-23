import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/context";

import PrivateRoute from "./components/privateroute/privateRoute";
import AdminDash from "./pages/admin.dash";
import LoginPage from "./components/auth/login";
import SchedulePage from "./pages/schedule";
import ClientPage from "./pages/client";
import ErrorPage from "./pages/errorPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={AdminDash} />
            {/* <PrivateRoute path="/editor" component={AdminDash} /> */}
            <PrivateRoute path="/schedule" component={SchedulePage} />
            <PrivateRoute path="/client" component={ClientPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
