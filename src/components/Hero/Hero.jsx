import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import animateIndexPage from '../../custom_animations/spider_animation/Spider';

const { heroBtnClicked } = require(`../../custom_animations/customScrolling`);
const { menuBtnClicked } = require(`../../custom_animations/customScrolling`);

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
    const { title, name, subtitle, cta } = {
      title: 'Hi, my name is',
      name: 'Napalys Klicius',
      subtitle: "I'm the Software Developer you've been looking for.",
      cta: "Let's talk ?",
    };
    const { isDesktop, isMobile } = this.state;

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
          <a id = "heroMenu"
            className="btn btn-default round-button onVisitSection"
            style={{ top: '40%' }}
            onClick={menuBtnClicked.bind(this, 'heroMenu', 'hero')}
          >
            0
          </a>
          <span className="title" style={{ top: '41%' }}>
            Home
          </span>
          <a id = "aboutMenu" className="btn btn-default round-button" style={{ top: '45%' }} onClick={menuBtnClicked.bind(this, 'aboutMenu', 'about')}>
            1
          </a>
          <span className="title" style={{ top: '46%' }}>
            About
          </span>
          <a id = "projectsMenu" className="btn btn-default round-button" style={{ top: '50%' }} onClick={menuBtnClicked.bind(this, 'projectsMenu', 'projects')}>
            2
          </a>
          <span className="title" style={{ top: '51%' }}>
            Projects
          </span>
          <a id = "contactMenu" className="btn btn-default round-button" style={{ top: '55%' }} onClick={menuBtnClicked.bind(this, 'contactMenu', 'contact')}>
            3
          </a>
          <span className="title" style={{ top: '56%' }}>
            Contact
          </span>
          <Container>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {title || 'Hi, my name is'}{' '}
                <span className="text-color-main">{name || 'Napalys Klicius'}</span>
                .
                <br />
                {"I'm the "}
                <span className="text-color-main">Software Developer</span>
                {" you've been looking for."}
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <button id="hero-btn" className="cta-btn cta-btn--hero" onClick={heroBtnClicked}>
                  {cta}
                </button>
              </p>
            </Fade>
          </Container>
        </section>
      </div>
    );
  }
}

export default Header;
