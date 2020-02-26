import React, { useState } from "react";
 
function TodoForm() {
  const [value, setValue] = useState("");
 
  return (
    <form>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type then hit *Enter*"
      />
    </form>
  );
}
 
export default TodoForm;