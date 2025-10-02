import { useState } from "react";

function MyUseState() {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrease = () => {
    setCounter((prev) => {
      // prev giá trị cũ của counter
      return prev + 1;
    });
    // setCounter((prev) => prev+1)
    // setCounter((prev) => prev+1)
  };
  return (
    <>
      <h1>UseState</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Tăng</button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Giảm
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default MyUseState;
