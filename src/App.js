import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  const removeBodyClass = () => {
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
  };

  const colorGenerator = () => {
    removeBodyClass();
    const randomNumber = Math.random();
    const randomColor = Math.floor(randomNumber * 16777215);
    const color = "#" + randomColor.toString(16);
    const g = document.querySelector(".btn");
    g.style.borderColor = color;
    document.body.style.background = color;
  };

  const bootsColor = (cls) => {
    removeBodyClass();
    document.body.classList.add("bg-" + cls);
  };

  const toggleMode = () => {
    removeBodyClass();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0F0D12";
      document.title = "TextUtil - Dark Mode";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        colorGenerator={colorGenerator}
        bootsColor={bootsColor}
      />
      <Alert alert={alert} />
      <TextForm heading="Write notes" mode={mode} showAlert={showAlert} />
      {/* <Router>
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
            </Route>
          </Switch>
        </Router> */}
    </>
  );
};

export default App;
