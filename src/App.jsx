import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import Navbar from "./components/Navbar";
import StarBackground from "./components/BackGround";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <div className="relative min-h-screen bg-black text-white">
        <StarBackground />

        <div className="relative z-10">
          <Navbar />
        
        <AppRouter />
        </div></div>
      </BrowserRouter>
  </>
  );
};
export default App;

  
