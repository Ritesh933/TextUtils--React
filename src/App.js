  import "./App.css";
  import About from "./Components/About";
  import Navbar from "./Components/Navbar";
  import TextForm from "./Components/TextForm";
  import Alert from "./Components/Alert";
  import React, { useState } from "react";
  import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

  // it is a js+html

  let name = "Room";
  const App = () => {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    };

    const toggleMode = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#444444";
        showAlert("Dark mode has been enable", "danger");
        document.title = "TextUtil - Dark Mode";
      } else if (mode === "dark") {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode has been enable", "success");
        document.title = "TextUtil - Light Mode";
      }
    };
    return (
      <>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        {/* <Router>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm heading="Write notes" mode={mode} showAlert={showAlert} />
            {/* </Route>
          </Switch>
        </Router> */}
      </>
    );
  };

  export default App;
