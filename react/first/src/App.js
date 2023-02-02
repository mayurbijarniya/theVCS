import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "You clicked ${counter} times";
  }, []);

  return (
    <div className="App">
      <p> Your counter value is : {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter
      </button>
    </div>
  );
}
export default App;
