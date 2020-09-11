import React from "react";
import Button from "@material-ui/core/Button";

const AddButton = (props) => {
  return (
    <Button
      className="todo-add"
      variant="contained"
      color="primary"
      onClick={props.addItems}
    >
      Add
    </Button>
  );
};

export default AddButton;
