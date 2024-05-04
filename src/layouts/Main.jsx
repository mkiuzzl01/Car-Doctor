import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <main className="max-w-7xl m-auto">
        <div>
        <Navbar></Navbar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
