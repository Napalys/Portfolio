import React from 'react';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title/Title';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  // Add your projects here
  {
    title: 'FirstPersonShooter',
    description:
      "One of my old side projects during my bachelor, it's completely open-source and may act as guidance for someone who just starts developing. I would highly recommend taking a look first at the Blueprint system, before digging into C++ code.\n" +
      '\n' +
      'The code is compatible with the Unreal Engine 4.26 version',
    imageUrl:
      'https://user-images.githubusercontent.com/11835209/112525104-d56e6e00-8da0-11eb-8b5b-8267b034ffc5.gif',
    liveUrl: '#!',
    sourceUrl: '#!',
  },
  {
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit...',
    imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg',
    liveUrl: '#!',
    sourceUrl: '#!',
  },
  // More projects...
];
const tiltOptions = {
  reverse: false,
  max: 8,
  perspective: 1000,
  scale: 1,
  speed: 300,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};
const ProjectItem = ({ title, description, imageUrl, liveUrl, sourceUrl }) => (
  <div className="sproject">
    <Tilt options={tiltOptions}>
      <div data-tilt="" className="thumbnail rounded">
        <img className="project-image" src={imageUrl} alt="" />
      </div>
    </Tilt>
    <div className="project-text">
      <h3 className="project-wrapper__text-title">{title}</h3>
      <div className="project-description">{description}</div>
      <div className="project-buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--hero"
          href={liveUrl}
        >
          See Live
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn text-color-main"
          href={sourceUrl}
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
);

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
};

const carouselProps = {
  showArrows: true,
  // width: '100px',
  autoPlay: true,
  infiniteLoop: true,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  swipeable: true,
};

const Projects = () => (
  <section
    id="projects"
    style={{
      gridArea: '1/1',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg)',
      backgroundSize: 'cover',
      zIndex: 0,
    }}
  >
    <div className="project-wrapper">
      <Title title="Projects" />
      <Carousel {...carouselProps}>
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </Carousel>
    </div>
  </section>
);

export default Projects;
