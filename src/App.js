import Navbar from "./Components/Share/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Share/Footer";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
