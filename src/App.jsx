import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import Navbar from "./components/Navbar";
import StarBackground from "./components/BackGround";
import Footer from "./components/Footer";

function App() {
  return (
<BrowserRouter>
  <div className="relative min-h-screen bg-black text-white flex flex-col">
    <StarBackground />

    <div className="relative z-10 flex-grow">
      <Navbar />
      <AppRouter />
    </div>

    <Footer />
  </div>
</BrowserRouter>

  );
}

export default App;
