import React from "react";

const TaskItem = ({ item, index }) => {
  const indexPosition = index + 1;
  console.log("index", indexPosition);

  return (
    <>
      <div>
        {indexPosition}. {item.title}
      </div>
    </>
  );
};

export default TaskItem;
