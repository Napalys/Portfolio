import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import animateIndexPage from '../../custom_animations/spider_animation/Spider';
import Menu from '../Menu/Menu';
import {
  enableCustomScrolling,
  heroBtnClicked,
  menuBtnClicked,
} from '../../custom_animations/custom_scrolling/customScrolling';

class Header extends React.Component {
  constructor(props) {
    super(props);
    if (window.innerWidth > 869) {
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
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (!isMobile) {
      enableCustomScrolling();
    }
  }

  render() {
    const { title, name, cta } = {
      title: 'Hi, my name is',
      name: 'Napalys Klicius',
      cta: "Let's talk ?",
    };
    const { isDesktop } = this.state;
    const isMobile = window.matchMedia('(pointer: coarse)').matches;

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
      <div id="hero-canvas" className="hero-container" style={{ display: 'grid' }}>
        <canvas
          id="demo-canvas"
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
            width: '98vw',
            zIndex: 1,
            height: '98vh',
          }}
        />
        <section
          id="hero"
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
          }}
        >
          {!isMobile && <Menu menuBtnClicked={menuBtnClicked} />}
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
                <span className="text-color-main">Software Engineer</span>
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
                  style={{ zIndex: 2000 }}
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
