import React, { useState } from "react";

export default function TextForm(props) {
  const changeUpperState = () => {
    // console.log("Uppercase convertion " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converd in upperCase","info")
  };

  const changeLowerState = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converd in lowerCase","warning")
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Notes has been cleen","secondary")
  };

  const copyText = () => {
    const text = document.querySelector("#mytext");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard successfully","primary")
  };

  const onChangeEvent = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter new text");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            rows="6"
            value={text}
            onChange={onChangeEvent}
            style={{

              
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-warning mx-1" onClick={changeUpperState}>
          Uppercase
        </button>
        <button className="btn btn-success mx-3" onClick={changeLowerState}>
          Lowercase
        </button>
        <button className="btn btn-danger mx-3" onClick={clearText}>
          clear
        </button>
        <button className="btn btn-dark mx-3" onClick={copyText}>
          copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute in read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something in the notes text"}</p>
      </div>
    </>
  );
}
