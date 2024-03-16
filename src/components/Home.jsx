import Main from "../assets/test.png";
import ComingSoon from "./ComingSoon";

import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <img src={Main} alt="home" className="bgr" />
      <ComingSoon />
    </div>
  );
};

export default Home;
