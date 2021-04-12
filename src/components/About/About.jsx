import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import '../../external/customScrolling';
import Skill from '../Skill';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about" style={{ display: 'grid', height: '100vh' }}>
      {/* <StaticImage */}
      {/*  style={{ gridArea: '1/1' }} */}
      {/*  layout="fullWidth" */}
      {/*  aspectRatio={3} */}
      {/*  alt="" */}
      {/*  src="../../images/codeImg.png" */}
      {/*  formats={['auto', 'webp', 'avif']} */}
      {/* /> */}
      {/* <div style={{ gridArea: '1/1', position: 'relative', placeItems: 'center', display: 'grid' }}> */}
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col lg={4} md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <Skill total={10} amount={9} color='#f34b7d' colorNot='#ffffff00' text={'C++'}/>
            <Skill total={10} amount={8} color='#b07219' colorNot='#00ff00' text={'Java'}/>
          </Col>
        </Row>
      </Container>

      {/* </div> */}
    </section>
  );
};

export default About;
