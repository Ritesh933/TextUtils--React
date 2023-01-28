import React from "react";

function Alert(props) {
  const capitalized = (word) => {
    // const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show my-2 mx-2`}
        role="alert"
      >
        <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
