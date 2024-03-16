import Main from "../assets/test.png";
import ComingSoon from "../assets/coming.png";
import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <img src={Main} alt="home" className="bgr" />
      <img src={ComingSoon} alt="coming" className="coming" />
    </div>
  );
};

export default Home;
