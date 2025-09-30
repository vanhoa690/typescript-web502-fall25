import { Toaster } from "react-hot-toast";
import Button from "./components/Button";

function App() {
  const handleClick = (name: string) => alert("Clicked!" + name);
  const handleClick2 = () => alert("Clicked!");

  return (
    <>
      <div>Hello React Typesscript</div>
      <Button label="Click Me 1" onClick={() => handleClick("hoadv")} />
      <Button label="Click Me 21" onClick={handleClick2} />
      <Button label="Click Me 3" onClick={handleClick2} />
      <Toaster />
    </>
  );
}

export default App;
