import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("UpperCase was clicked!" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Textbox cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    // method-1
    // var text = document.getElementById("mybox");
    // text.select();
    // navigator.clipboard.writeText(text.value);

    // method - 2
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let arr = text.split(/[ ]+/);
    setText(arr.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#162045" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(/[ ]+/).length : 0} words &{" "}
          {text.length} characters
        </p>
        <p>Reading time: {text.split(" ").length * 0.008} minutes</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
