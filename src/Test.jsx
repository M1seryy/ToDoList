import React, { useRef, useState, useEffect } from "react";

export const Test = () => {
  let inputOne = useRef();
  const [nums, setNums] = useState([]);
  const [newNum, setNewNums] = useState();

  let handle = () => {
    setNewNums(inputOne.current.value);
    setNums([...nums, newNum]);
  };

  useEffect(() => {
    console.log("update");
  });
  return (
    <div>
      <input ref={inputOne} type="text" />
      <ul>
        {nums.map((currentNum) => (
          <li>{currentNum}</li>
        ))}
      </ul>
      <button onClick={handle}>Click</button>
    </div>
  );
};
export default Test;
