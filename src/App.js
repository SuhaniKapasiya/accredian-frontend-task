import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
    <HeroSection/>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
