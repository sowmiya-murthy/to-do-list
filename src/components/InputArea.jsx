import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} value={item} type="text" />
      <button onClick={() => {
        props.click(item);
        setItem("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
