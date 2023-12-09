import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import animateIndexPage from '../../custom_animations/spider_animation/Spider';
import Menu from '../Menu/Menu';

const {
  heroBtnClicked,
  menuBtnClicked,
} = require(`../../custom_animations/custom_scrolling/customScrolling`);

class Header extends React.Component {
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
    animateIndexPage();
  }

  render() {
    const { title, name, cta } = {
      title: 'Hi, my name is',
      name: 'Napalys Klicius',
      cta: "Let's talk ?",
    };
    const { isDesktop, isMobile } = this.state;

    // Variants for desktop (left fade)
    const desktopVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    };

    // Variants for mobile (bottom fade)
    const mobileVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };

    // eslint-disable-next-line no-nested-ternary
    const variant = isDesktop ? desktopVariants : isMobile ? mobileVariants : desktopVariants;

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
        <canvas
          id="demo-canvas"
          style={{ gridArea: '1/1', position: 'relative', placeItems: 'center', display: 'grid' }}
        />
        <section
          id="hero"
          style={{
            gridArea: '1/1',
            zIndex: 2000,
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
          }}
        >
          <Menu menuBtnClicked={menuBtnClicked} />
          <Container>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.3 }}
              variants={variant}
            >
              <h1 className="hero-title">
                {title || 'Hi, my name is'}{' '}
                <span className="text-color-main">{name || 'Napalys Klicius'}</span>
                .
                <br />
                {"I'm the "}
                <span className="text-color-main">Software Developer</span>
                {" you've been looking for."}
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.3 }}
              variants={variant}
            >
              <p className="hero-cta">
                <button
                  type="button"
                  id="hero-btn"
                  className="cta-btn cta-btn--hero"
                  onClick={heroBtnClicked}
                >
                  {cta}
                </button>
              </p>
            </motion.div>
          </Container>
        </section>
      </div>
    );
  }
}

export default Header;
