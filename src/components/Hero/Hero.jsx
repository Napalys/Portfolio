import React, {useContext, useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
// import {StaticImage} from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import {animateIndexPage} from '../../external/demo';

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
    // const { hero } = useContext(PortfolioContext);
    // eslint-disable-next-line no-unused-vars
    const { title, name, subtitle, cta } = { title : "Abra", name: "Cadabra", subtitle: "Alakazam", cta: "pokemon"};
    // eslint-disable-next-line no-unused-vars
    const { isDesktop, isMobile } = this.state;

    return (
      <div className="hero-container" style={{ display: "grid"}}>
        <div style={{
          gridArea: '1/1',
          width: '100%',
          height: '100%',
          backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg)"
        }}
        />
        <canvas id="demo-canvas" style={{ gridArea: '1/1', position: 'relative', placeItems: 'center', display: 'grid' }}/>
      <section id="hero" style={{ gridArea: '1/1', zIndex: 2000, position: 'relative', placeItems: 'center', display: 'grid' }}>
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="text-color-main">{name || 'Napalys Klicius'}</span>
              <br/>
              {subtitle || "I'm the Software Developer you've been looking for."}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
            </p>
          </Fade>

          <div className="container demo">
            <div className="content">
            </div>
          </div>
        </Container>
      </section>

    </div>

    );
  }
}

export default Header;
