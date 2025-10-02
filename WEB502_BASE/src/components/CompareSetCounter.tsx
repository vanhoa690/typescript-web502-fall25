import { useState } from "react";

function CompareSetCounter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // Trường hợp 1: dùng counter + 1
  const increaseWrong = () => {
    setCounter1(counter1 + 1);
    setCounter1(counter1 + 1);
  };

  // Trường hợp 2: dùng prev => prev + 1
  const increaseCorrect = () => {
    setCounter2((prev) => prev + 1);
    setCounter2((prev) => prev + 1);
  };

  return (
    <div style={{ fontSize: "20px" }}>
      <h1>So sánh setCounter</h1>

      <div>
        <h2>Trường hợp 1: setCounter(counter + 1)</h2>
        <p>Giá trị: {counter1}</p>
        <button onClick={increaseWrong}>Tăng 2 lần (counter + 1)</button>
      </div>

      <div>
        <h2>Trường hợp 2: setCounter(prev = prev + 1)</h2>
        <p>Giá trị: {counter2}</p>
        <button onClick={increaseCorrect}>Tăng 2 lần (prev + 1)</button>
      </div>
    </div>
  );
}

export default CompareSetCounter;
