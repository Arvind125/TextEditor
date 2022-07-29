import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForms from "./components/TextForms";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#162045";
      showAlert("Dark Mode has been enabled", "success");
    }
  };

  const toggleBlueMode = () => {
    if (mode !== "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("blue");
      document.body.style.backgroundColor = "blue";
      showAlert("Blue Mode has been enabled", "success");
    }
  };
  const toggleGreenMode = () => {
    if (mode !== "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("Green Mode has been enabled", "success");
    }
  };
  const toggleRedMode = () => {
    if (mode !== "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("red");
      document.body.style.backgroundColor = "red";
      showAlert("Red Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleDarkMode={toggleDarkMode}
        toggleBlueMode={toggleBlueMode}
        toggleGreenMode={toggleGreenMode}
        toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForms
          heading="Enter The Text to analys Below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
