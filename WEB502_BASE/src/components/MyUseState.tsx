import { useState } from "react";
import Button from "./Button";

const MyUseState = () => {
  // state. setState
  const [count, setCount] = useState<number>(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Count : {count}
      <Button label="Tăng Count" color="blue" onClick={handleInc}></Button>
      <Button
        label="Tăng Count cach 2"
        color="blue"
        onClick={() => setCount(count + 1)}
      ></Button>
    </div>
  );
};

export default MyUseState;
