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
    // const text = document.querySelector("#mytext");
    navigator.clipboard.writeText(text);
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
        <div className="container">
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={changeUpperState}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={changeLowerState}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clearText}>
          clear
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={copyText}>
          copy
        </button></div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(/s+/).filter((element)=>{
            return element.length!==0
          }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/s+/).filter((element)=>{
            return element.length!==0
          }).length} minute in read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something in the notes text"}</p>
      </div>
    </>
  );
}

