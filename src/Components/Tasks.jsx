import { React, useState } from "react";

const Tasks = () => {
  const [state, setState] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { value } = e.target;
    setState(value);
  };

  const handleTask = () => {
    let payload = {
      title: state,
      status: false,
    };

    const newtask = [...task, payload];
    setTask(newtask);
    setState("");
  };
  console.log("task", task);

  return (
    <>
      <h1>Tasks</h1>
      <input
        value={state}
        placeholder="write tasks..."
        onChange={handleChange}
      />
      <button onClick={handleTask}>ADD Task</button>
      {/* <h2>{state}</h2> */}
      <div>
        {task.map((item, index) => {
          return (
            <>
              <h2
                style={index % 2 === 0 ? { color: "green" } : { color: "red" }}
              >
                {item.title}
              </h2>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
