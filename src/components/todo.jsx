import React from "react";
 
function Todo({ todo, index, onComplete, onUnfinished, onDeleteTodo }) {
  return (
    <React.Fragment>
      <div className="card mb-3">
        <div className="card-body">
          <h5
            className="card-title"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            {todo.text}
          </h5>
          <button onClick={() => onComplete(index)} className="btn btn-success">
            Mark Complete
          </button>{" "}
          <button
            onClick={() => onUnfinished(index)}
            className="btn btn-secondary"
          >
            Mark Unfinished
          </button>{" "}
          <button
            onClick={() => onDeleteTodo(index)}
            className="btn btn-danger"
          >
            Delete Todo
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
 
export default Todo;
