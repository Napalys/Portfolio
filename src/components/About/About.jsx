import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Title from '../Title/Title';
import initializeFrameworkSphere from '../../custom_animations/sphere/FrameworkSphere';

class About extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      isDesktop: window.innerWidth > 869,
      isMobile: window.innerWidth <= 869,
    };

    // Variants for desktop (side fade)
    this.desktopVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    };

    // Variants for mobile (bottom fade)
    this.mobileVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };
  }

  getAnimationVariants() {
    return window.matchMedia('(pointer: coarse)').matches;
  }

  componentDidMount() {
    const isMobile = this.getAnimationVariants();
    initializeFrameworkSphere(isMobile);
  }

  render() {
    // const { about } = useContext(PortfolioContext);
    // const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;
    const { paragraphOne, paragraphTwo, paragraphThree, resume, linkedIn } = {
      paragraphOne:
        "Hello there! I'm Napalys Kličius, a passionate software developer with a master's degree in Computer Science. I thrive on being a Problem Solver, armed with a diverse skill set that extends from object-oriented programming to logical and functional paradigms. ",
      paragraphTwo: 'Intrigued? If you want to know more about me checkout my LinkedIn or GitHub!',
      paragraphThree:
        'Sphere displays the technologies I have the most experience with. Fun fact about me, my favorite programming language is C++.',
      resume: 'https://github.com/Napalys',
      linkedIn: 'https://www.linkedin.com/in/napalys-klicius/',
    };

    const isMobile = this.getAnimationVariants();

    return (
      <div
        className="hero-container"
        style={{ display: 'grid', gridTemplateRows: 'auto 1fr', zIndex: 0 }}
      >
        <section
          id="about"
          style={{
            gridArea: '1/1',
            zIndex: 0,
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
          }}
        >
          <Container>
            <Title title="About Me" style={{ gridRow: 1, gridColumn: '1/-1' }} />
            <Row style={{ gridRow: 2 }}>
              <Col style={{ gridColumn: 2 }}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.5 }}
                  variants={this.getAnimationVariants()}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}
                >
                  <span className="Sphere" style={{ display: 'inline-block' }} />
                </motion.div>
              </Col>
              <Col style={{ gridColumn: 1 }}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.5 }}
                  variants={this.getAnimationVariants()}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', paddingRight: !isMobile ? '55px' : '0px', }}

                >
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text">{paragraphOne}</p>
                    <p className="about-wrapper__info-text">{paragraphThree}</p>
                    <p className="about-wrapper__info-text">{paragraphTwo}</p>
                    {resume && (
                      <div className="d-flex justify-content-center mt-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={resume}
                          style={{ marginRight: '10px' }}
                        >
                          Github
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={linkedIn}
                        >
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Col>
            </Row>
            <Row alt="">
              <div style={{ justifycontent: 'center' }} />
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default About;
