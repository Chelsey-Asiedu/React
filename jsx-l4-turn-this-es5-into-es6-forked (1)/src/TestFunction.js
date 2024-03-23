import React from "react";

const TestFunction = (props) => {
  if (typeof props.func() === props.expectedReturnType) {
    return <p className="success">Yes</p>;
  } else {
    return <p className="failure">Try Again</p>;
  }
};

export default TestFunction;
