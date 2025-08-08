import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import Navbar from "./components/Navbar";
import StarBackground from "./components/BackGround";
import Footer from "./components/Footer";

function App() {
  return (
<BrowserRouter>
  <div className="relative bg-black text-white flex flex-col min-h-screen">
  <StarBackground />

  <div className="relative z-10 flex-grow overflow-y-auto">
    <Navbar />
    <AppRouter />
  </div>

  <Footer />
</div>

  
</BrowserRouter>

  );
}

export default App;
