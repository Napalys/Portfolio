import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

import { headData } from '../mock/data';
import '../style/main.scss';

const NotFoundPage = () => {
  const { lang } = headData;

  // Animation settings
  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            variants={fadeVariants}
          >
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
            variants={fadeVariants}
          >
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
export default NotFoundPage;
