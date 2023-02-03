import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <ToastContainer />
        <Layout>
          <Switch>
            {routes.map((route, index) => {
              return <Route key={index} {...route} />;
            })}
          </Switch>
        </Layout>
      </div>
    </React.StrictMode>
  );
}

export default App;
