import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaReact,
  FaNode,
  FaLaravel,
  FaDocker,
  FaGithub,
  FaDatabase,
} from "react-icons/fa"; // Add your preferred icon library
import "./About.css"; // Import the custom CSS file

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Faster stagger for cards
      },
    },
  };

  return (
    <div className="container mt-5">
      <motion.h1
        className="text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1: Front-End */}
        <motion.div className="col-md-4 mb-4" variants={cardVariants}>
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Front-End Development</h5>
              <p className="card-text">
                I am experienced in front-end development using modern tools
                like React.js and Next.js. I focus on building user-friendly,
                responsive, and interactive web applications.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaReact style={{ color: "rgb(89, 194, 230)" }} /> React.js
                </li>
                <li className="list-group-item">
                  <FaNode style={{ color: "green" }} /> Next.js
                </li>
                <li className="list-group-item">
                  <i className="fab fa-html5"></i> HTML/CSS/JavaScript
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Back-End */}
        <motion.div className="col-md-4 mb-4" variants={cardVariants}>
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Back-End Development</h5>
              <p className="card-text">
                On the back-end, I work with Laravel, Node.js, and Express to
                build scalable APIs and robust server-side applications,
                ensuring secure and efficient communication between clients and
                servers.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaLaravel style={{ color: "red" }} /> Laravel
                </li>
                <li className="list-group-item">
                  <FaNode style={{ color: "green" }} /> Node.js
                </li>
                <li className="list-group-item">
                  <i className="fab fa-node-js"></i> Express.js
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Database & DevOps */}
        <motion.div className="col-md-4 mb-4" variants={cardVariants}>
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Databases & DevOps</h5>
              <p className="card-text">
                I have experience with relational and non-relational databases
                like MySQL and MongoDB. I also work with Git, GitHub, and
                Docker, ensuring seamless development and deployment workflows.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaDatabase /> MySQL
                </li>
                <li className="list-group-item">
                  <FaDatabase /> MongoDB
                </li>
                <li className="list-group-item">
                  <FaGithub style={{ color: "black" }} /> Git & GitHub
                </li>
                <li className="list-group-item">
                  <FaDocker /> Docker
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 4: Agile & Cloud */}
        <motion.div className="col-md-6 mb-4" variants={cardVariants}>
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Agile Methodology & Cloud</h5>
              <p className="card-text">
                I follow Agile practices for project management and development,
                and I work with cloud technologies to build and deploy scalable
                applications.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Agile Methodologies</li>
                <li className="list-group-item">Cloud Solutions</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Full Stack Expertise */}
        <motion.div className="col-md-6 mb-4" variants={cardVariants}>
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Full Stack Expertise</h5>
              <p className="card-text">
                I have a deep understanding of both front-end and back-end
                development, enabling me to create seamless and robust
                full-stack applications from conception to deployment.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaReact style={{ color: "rgb(89, 194, 230)" }} /> React.js &
                  Next.js (Front-End)
                </li>
                <li className="list-group-item">
                  <FaNode style={{ color: "black" }} /> Node.js, Express,
                  Laravel (Back-End)
                </li>
                <li className="list-group-item">
                  <FaDatabase /> MySQL & MongoDB (Database)
                </li>
                <li className="list-group-item">
                  <FaDocker /> Git, Docker (DevOps)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
