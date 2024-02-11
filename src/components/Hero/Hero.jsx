import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import animateIndexPage from '../../custom_animations/spider_animation/Spider';
import Menu from '../Menu/Menu';
import GalacticGrowth from '../../custom_animations/galactic_growth/galacticGrowth';

import {
  enableCustomScrolling,
  heroBtnClicked,
  menuBtnClicked,
} from '../../custom_animations/custom_scrolling/customScrolling';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: typeof window !== 'undefined' ? window.innerWidth > 869 : false,
      isMobile: false,
      backgroundImageUrl:
        "url('https://github.com/Napalys/Portfolio/assets/11835209/34a00297-c785-46ce-90c3-95e07d2e6de1')",
    };
  }

  componentDidMount() {
    animateIndexPage();
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (!isMobile) {
      enableCustomScrolling();
    }
  }

  handleBackgroundChange = (event) => {
    const newBackgroundImageUrl = event.target.value;
    this.setState({ backgroundImageUrl: newBackgroundImageUrl });
    document.documentElement.style.setProperty(
      '--background-image-url',
      `url(${newBackgroundImageUrl})`
    );
  };

  render() {
    const { title, name, cta } = {
      title: 'Hi, my name is',
      name: 'Napalys Klicius',
      cta: "Let's talk ?",
    };
    const { isDesktop, backgroundImageUrl } = this.state;
    const isMobile =
      typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

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
        <GalacticGrowth />
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
            backgroundImage: `url(${backgroundImageUrl})`,
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
                <select
                  onChange={this.handleBackgroundChange}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 500,
                    visibility: 'hidden',
                  }}
                >
                  <option value="https://wallpaperaccess.com/full/7044.jpg">URL 1</option>
                  <option value="https://wallpaperaccess.com/full/7042.jpg">URL 2</option>
                  <option value="https://wallpaperaccess.com/full/7039.jpg">URL 3</option>
                  <option value="https://wallpaperaccess.com/full/7035.jpg">URL 4</option>
                  <option value="https://wallpaperaccess.com/full/7056.jpg">URL 5</option>
                  <option value="https://wallpaperaccess.com/full/7062.jpg">URL 6</option>
                  <option value="https://wallpaperaccess.com/full/7067.jpg">URL 7</option>
                  <option value="https://wallpaperaccess.com/full/21516.jpg">URL 8</option>
                  <option value="https://wallpaperaccess.com/full/21526.jpg">URL 9</option>
                  <option value="https://wallpaperaccess.com/full/21527.jpg">URL 10</option>
                  <option value="https://wallpaperaccess.com/full/21573.jpg">URL 11</option>
                  <option value="https://wallpaperaccess.com/full/1258619.jpg">URL 12</option>
                  <option value="https://wallpaperaccess.com/full/50923.jpg">URL 13</option>
                  <option value="https://wallpaperaccess.com/full/1258657.jpg">URL 14</option>
                  <option value="https://wallpaperaccess.com/full/3205373.jpg">URL 15</option>
                  <option value="https://wallpaperaccess.com/full/957762.jpg">URL 16</option>
                  <option value="https://wallpaperaccess.com/full/3205404.jpg">URL 17</option>
                  <option value="https://wallpaperaccess.com/full/506444.jpg">URL 18</option>
                  <option value="https://wallpaperaccess.com/full/1198721.jpg">URL 19</option>
                  <option value="https://wallpaperaccess.com/full/3205680.jpg">URL 20</option>
                  <option value="https://wallpaperaccess.com/full/133256.jpg">URL 21</option>
                  <option value="https://wallpaperaccess.com/full/1506.jpg">URL 22</option>
                  <option value="https://wallpaperaccess.com/full/7046.jpg">URL 23</option>
                  <option value="https://wallpaperaccess.com/full/506444.jpg">URL 24</option>
                  <option value="https://github.com/Napalys/Portfolio/assets/11835209/1e502469-024a-46af-82c9-a7ec3eeffec0">
                    URL 25
                  </option>
                </select>
              </p>
            </motion.div>
          </Container>
        </section>
      </div>
    );
  }
}

export default Header;
