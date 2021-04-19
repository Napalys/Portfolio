import React, { useContext, useEffect, useState } from 'react';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section
      id="projects"
      style={{
        gridArea: '1/1',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />

          <Carousel
            showArrows
            width="1000px"
            animationHandler={'fade'}
            autoPlay = {true}
            infiniteLoop= {true}
            showStatus = {false}
            showIndicators
            showThumbs
            swipeable

          >
            <div className="sproject">
              <h3 className="project-wrapper__text-title">Project Title</h3>
              <div
                className="column"
                style={{ textAlign: 'justify', float: 'left', fontSize: 'medium' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur
                blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </div>
              <a
                href={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg' || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <img
                      id="2"
                      className="column"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg"
                      alt=""
                      style={{ float: 'right', width: '64%' }}
                    />
                  </div>
                </Tilt>
              </a>
              <div className="columnBottom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                  style={{ float: 'left' }}
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  style={{ float: 'left' }}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="sproject">
              <h3 className="project-wrapper__text-title">Project Title</h3>
              <div
                className="column"
                style={{ textAlign: 'justify', float: 'left', fontSize: 'medium' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur
                blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </div>
              <a
                href={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg' || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <img
                      id="2"
                      className="column"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg"
                      alt=""
                      style={{ float: 'right', width: '64%' }}
                    />
                  </div>
                </Tilt>
              </a>
              <div className="columnBottom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                  style={{ float: 'left' }}
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  style={{ float: 'left' }}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="sproject">
              <h3 className="project-wrapper__text-title">Project Title</h3>
              <div
                className="column"
                style={{ textAlign: 'justify', float: 'left', fontSize: 'medium' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur
                blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </div>
              <a
                href={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg' || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <img
                      id="2"
                      className="column"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg"
                      alt=""
                      style={{ float: 'right', width: '64%' }}
                    />
                  </div>
                </Tilt>
              </a>
              <div className="columnBottom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                  style={{ float: 'left' }}
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  style={{ float: 'left' }}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="sproject">
              <h3 className="project-wrapper__text-title">Project Title</h3>
              <div
                className="column"
                style={{ textAlign: 'justify', float: 'left', fontSize: 'medium' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur
                blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </div>
              <a
                href={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg' || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <img
                      id="2"
                      className="column"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg"
                      alt=""
                      style={{ float: 'right', width: '64%' }}
                    />
                  </div>
                </Tilt>
              </a>
              <div className="columnBottom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                  style={{ float: 'left' }}
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  style={{ float: 'left' }}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="sproject">
              <h3 className="project-wrapper__text-title">Project Title</h3>
              <div
                className="column"
                style={{ textAlign: 'justify', float: 'left', fontSize: 'medium' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur
                blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </div>
              <a
                href={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg' || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <img
                      id="2"
                      className="column"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg"
                      alt=""
                      style={{ float: 'right', width: '64%' }}
                    />
                  </div>
                </Tilt>
              </a>
              <div className="columnBottom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                  style={{ float: 'left' }}
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  style={{ float: 'left' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Projects;

{
  /* <img id ='2' src="https://i.stack.imgur.com/CVgbr.jpg" alt=""/> */
}
{
  /* <img id ='3' src="https://i.stack.imgur.com/7c4yC.jpg" alt=""/> */
}
{
  /* <img id ='4' src="https://i.stack.imgur.com/RTiml.jpg" alt=""/> */
}
{
  /* <img id ='5' src="https://i.stack.imgur.com/xckZy.jpg" alt=""/> */
}
{
  /* <img id ='6' src="https://i.stack.imgur.com/CVgbr.jpg" alt=""/> */
}
{
  /* <img id ='7' src="https://i.stack.imgur.com/7c4yC.jpg" alt=""/> */
}
{
  /* {projects.map((project) => {
              const { title, info, info2, url, repo, img, id } = project;
              return (
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                          <p className="mb-4">{info2 || ''}</p>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          See Live
                        </a>

                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              );
            })} */
}
