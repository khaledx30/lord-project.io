// import { useState } from "react";
import "./App.css";
import DashPord from "./componants/DashPord";

function App() {
  // const [state, setState] = useState(0);
  return (
    <>
      <div className="app">
        <header>Lord of the rings</header>
        <main>
          <DashPord />
        </main>
      </div>
    </>
  );
}

export default App;
