import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Custom CSS file for additional styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay muted loop className="video-background">
        <source src="/Videos/vid.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Overlay Content */}
      <div className="overlay-content">
        <motion.h1
          className="text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I am a Full Stack Developer specializing in creating dynamic and
          responsive web applications.
        </motion.p>
        <motion.a
          href="/contact"
          className="btn btn-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.a>
      </div>

     
    </div>
  );
};

export default Home;
