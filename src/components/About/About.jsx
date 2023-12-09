import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import javaLogo from '../../images/logos/java.png';
import portfolioPhoto from '../../images/portfolioPhoto.png';
import cSharpLogo from '../../images/logos/cSharp.png';
import sqlLogo from '../../images/logos/sql.png';
import cppLogo from '../../images/logos/cpp.png';
import rustLogo from '../../images/logos/rust.png';
import { motion } from 'framer-motion';

class About extends React.Component {
  constructor(props) {
    super(props);
    if (window.innerWidth > 769) {
      this.state = {
        isDesktop: true,
        isMobile: false,
      };
    } else {
      this.state = {
        isMobile: true,
        isDesktop: false,
      };
    }
  }
  componentDidMount() {
    // initTileAnimation();
  }

  render(){
  // const { about } = useContext(PortfolioContext);
  // const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = {
    img:"", paragraphOne:"", paragraphTwo:"", paragraphThree:""
  };

  const { isDesktop, isMobile } = this.state;
    const desktopVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    };

    // Variants for mobile (bottom fade)
    const mobileVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };

    // Choose the appropriate variants based on the device
    const variants = isDesktop ? desktopVariants : (isMobile ? mobileVariants : desktopVariants);

  return (
    <div className="hero-container" style={{ display: 'grid' }}>
      <div
        style={{
          gridArea: '1/1',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg)',
          backgroundSize: 'cover',
        }}
      />

    <section id="about"
             style={{
               gridArea: '1/1',
               zIndex: 2000,
               position: 'relative',
               placeItems: 'center',
               display: 'grid',
             }}>

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
        <Row >
          <Col>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              variants={variants}
            >
              <img src={portfolioPhoto} alt="" style={{ width: '80%', padding: '10px' }} />
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              variants={variants}
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I\'m a passionate software developer with a master’s degree in computer science. I’m most comfortable in object-oriented programming, however, I’m not limited to this domain alone – I am well familiar with other software paradigms, such as logical or functional programming, which gives me an encompassing understanding and a variety of approaches to solve software-related problems. In the past, I have been working along the entire development cycle, from coding and testing to documentation and support. Moreover, my practical experience covers the whole range from developing simple APIs or databases to well-tested large-scale systems. In my free time, I also like to write software that helps me streamline my digital activities by automating repetitive actions. I’m a challenge seeker – which is probably why problem cracking is the part of software development that excites me the most.'}
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
            </motion.div>
          </Col>
        </Row>

        <Row alt="">
          <div style={{ justifycontent: 'center' }}>
            <img src={javaLogo} className={"neonIcon neonIconJava"} alt="" style={{width: '12%', padding: '10px'}}/>
            <img src={cSharpLogo} className={"neonIcon neonIconCsharp"} alt="" style={{width: '15%', padding: '10px'}}/>
            <img src={cppLogo} className={"neonIcon neonIconCpp"} alt="" style={{width: '15%', padding: '10px'}}/>
            <img src={rustLogo} className={"neonIcon neonIconRust"} alt="" style={{width: '15%', padding: '10px'}}/>
            <img src={sqlLogo} className={"neonIcon neonIconSql"} alt="" style={{width: '15%', padding: '10px'}}/>
            {/*</div>*/}
            {/*<Skill total={10} amount={9} color='#f34b7d' colorNot='#ffffff00' text={'C++'}/>*/}
            {/*<Skill total={10} amount={8} color='#b07219' colorNot='#00ff00' text={'Java'}/>*/}
            {/*<Skill total={10} amount={8} color='#178600' colorNot='#00ff00' text={'C#'}/>*/}
            {/*<Skill total={10} amount={8} color='#dad8d8' colorNot='#00ff00' text={'SQL'}/>*/}
            </div>
          </Row>


      </Container>

      {/* </div> */}
    </section>
    </div>
  );
}
}

export default About;
