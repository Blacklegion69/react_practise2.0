import { useState } from "react";
import Todos from "./Todos.jsx";

export default function Todo(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    e.preventDefault();
  };

  const handleClick = (e) => {
    setItems(items + <Todos key={crypto.randomUUID} text={text} />);
    e.preventDefault();
  };

  return (
    <>
      <div className="w-[400px] rounded p-2 flex justify-center items-center bg-gray-400">
        <form>
          <input
            className="text-bold outline-none border-none p-2 m-2 bg-slate-900 text-slate-100 rounded"
            onChange={handleChange}
            value={text}
            type="text"
            placeholder="Enter your todo here"
          />
          <button
            className="text-bold bg-slate-900 text-slate-100 rounded p-2 m-2"
            onClick={handleClick}
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-[400px] p-2 m-2 flex justify-center items-center flex-col rounded bg-teal-200">
        {items}
      </div>
    </>
  );
}
