import React from "react";

function Alert(props) {
  const capitalized = (word) => {
    // const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div style={{height:"45px"}}>
      {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
      </div>
      )}
    </div>
  );
}

export default Alert;
