import Banner from "../../layouts/Banner";
import About from "../About/About";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
