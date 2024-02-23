import { useState } from "react";
import "../Todo/Todo.css";

function Todo({ finishtodos, edittodos, deletetodos, text, isFinished, id }) {
  const [editting, setIsEditting] = useState(false);

  const [editText, setEditText] = useState(text);

  const [isStrikethrough, setIsStrikethrough] = useState(false);

  return (
    <div className="todoitems">
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => {
          finishtodos(id);
          setIsStrikethrough(!isStrikethrough);
        }}
      />
      {editting ? (
        <input
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
          className="editinput"
          type="text"
        />
      ) : (
        <span
          style={{ textDecoration: isStrikethrough ? "line-through" : "none" }}
          className="todospan"
        >
          {editText}
        </span>
      )}
      <button
        onClick={() => {
          edittodos(editText, id);
          setIsEditting(!editting);
        }}
        className="todobtn"
      >
        {editting ? "Save" : "Edit"}
      </button>
      <button onClick={() => deletetodos(id)} className="todobtn">
        Delete
      </button>
    </div>
  );
}

export default Todo;
