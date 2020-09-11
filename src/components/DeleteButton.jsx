import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteButton = (props) => {
  return (
    <Button
      className="todo-delete"
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
      onClick={() => props.deleteItems(props.id)}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
