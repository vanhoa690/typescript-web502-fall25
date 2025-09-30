import { Toaster } from "react-hot-toast";
import Button from "./components/Button";

function App() {
  const handleClick = () => alert("Clicked!");

  return (
    <>
      <div>Hello React Typesscript</div>

      <Button label="Click Me 21" onClick={handleClick} />
      <Button label="Click Me 3" onClick={handleClick} />
      <Toaster />
    </>
  );
}

export default App;
