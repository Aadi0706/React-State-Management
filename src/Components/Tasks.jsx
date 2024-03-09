import { React, useState } from "react";
import './Task.css';
import TaskItem from "./TaskItem";


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
        className="Input_tag"
        value={state}
        placeholder="write tasks..."
        onChange={handleChange}
      />
      <button className="Button_css"onClick={handleTask}>ADD Task</button>
      {/* <h2>{state}</h2> */}
      <div>
        {task.map((item, index) => {
          return (
            <>
             <TaskItem item={item} index={index}/>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
