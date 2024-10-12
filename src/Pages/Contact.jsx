import { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Contact = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const { firstName, lastName, phone, email } = person;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getPersonValue = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 4000); // Simulate loading for 2 seconds
  };

  return (
    <div className="container mt-5">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onChange={getPersonValue}
              value={firstName}
              placeholder="Enter your first name"
              type="text"
              name="firstName"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={getPersonValue}
              value={lastName}
              placeholder="Enter your last name"
              type="text"
              name="lastName"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={getPersonValue}
              value={phone}
              placeholder="Enter your phone"
              type="tel"
              name="phone"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={getPersonValue}
              value={email}
              placeholder="Enter your email"
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>
          <motion.button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1 }}
            animate={{
              backgroundColor: isSubmitting ? "#17a2b8" : "#007bff",
              scale: isSubmitting ? 0.95 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {isSubmitting ? (
              <motion.div
                className="spinner-border text-light"
                role="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="sr-only"></span>
              </motion.div>
            ) : (
              "Submit"
            )}
          </motion.button>
        </form>
      ) : (
        <motion.div
          className="alert alert-success mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="alert-heading">Submission Successful!</h4>
          <p>
            Thanks{" "}
            <strong>
              {" "}
              {firstName} {lastName}{" "}
            </strong>
            For Your contact the informations has been submitted successfully.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
