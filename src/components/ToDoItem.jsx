import React from "react";

function CreateToDO(props) {
  return <li onClick={() => props.delete(props.id)}>{props.data}</li>;
}

export default CreateToDO;
