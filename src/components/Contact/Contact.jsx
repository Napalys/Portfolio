import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  // Animation settings
  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8 }}
          variants={fadeVariants}
        >
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://www.linkedin.com/in/napalys-klicius/'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
