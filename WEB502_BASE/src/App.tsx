import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Bạn đã click ${count} lần`;
  }, [count]); // Chỉ chạy khi count thay đổi
  return (
    <div>
      <Button
        label="Red Button"
        color="red"
        onClick={() => alert("Red clicked!")}
      />
      <Button label="Blue Button" onClick={() => alert("Blue clicked!")} />
      <div>
        <p>Bạn đã click: {count} lần</p>
        <Button label="Tăng" onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
}

export default App;
