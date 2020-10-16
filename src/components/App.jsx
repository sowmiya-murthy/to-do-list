import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [list, setlist] = useState([]);

  function handleClick(item) {
    setlist((prevValue) => {
      return [...prevValue, item];
    });
  }

  function deleteItems(id) {
    setlist((prev) => {
      return prev.filter((data, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea click={handleClick}/>
      <div>
        <ul>
          {list.map((listdata, index) => (
            <ToDoItem
              key={index}
              id={index}
              data={listdata}
              delete={deleteItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
