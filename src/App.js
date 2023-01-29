import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Discussion from "./container/Discussion/Discussion";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Discussion />
    </div>
  );
}

export default App;
