import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import Navbar from "./components/Navbar";
import StarBackground from "./components/BackGround";
import {ThemeToggle} from "./components/ThemeToggle";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <StarBackground/>
        <Navbar />
        <ThemeToggle/>
        <AppRouter />
      </BrowserRouter>
  </>
  );
};
export default App;

  
