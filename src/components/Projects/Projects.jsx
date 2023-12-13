import React from 'react';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title/Title';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArchLogo from '../../images/logos/arch-logo.png';
import Project from './Project';

const projects = [
  new Project(
    'FirstPersonShooter',

    "One of my old side projects during my bachelor, it's completely open-source and may act as guidance for someone who just starts developing. I would highly recommend taking a look first at the Blueprint system, before digging into C++ code.\n" +
      '\n' +
      'The code is compatible with the Unreal Engine 4.26 version',

    'https://user-images.githubusercontent.com/11835209/112525104-d56e6e00-8da0-11eb-8b5b-8267b034ffc5.gif',
    '#!',
    'https://github.com/Napalys/FirstPersonShooter',
    [
      { src: ArchLogo, label: 'Arch linux' },
      { src: ArchLogo, label: 'Label 2' },
      { src: ArchLogo, label: 'Label 3' },
    ]
  ),
  new Project(
    'Project Title',
    'Lorem ipsum dolor sit...',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg',
    'https://example.com/live',
    'https://example.com/source',
    [
      { src: ArchLogo, label: 'Label 1' },
      { src: ArchLogo, label: 'Label 2' },
      { src: ArchLogo, label: 'Label 3' },
    ]
  ),
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
const ProjectItem = ({ project }) => (
  <div className="sproject">
    <div className="project-title">
      <h3 className="project-wrapper__text-title">{project.title}</h3>
    </div>
    <Tilt options={tiltOptions}>
      <div className="thumbnail rounded">
        <img className="project-image" src={project.imageUrl} alt="" />
      </div>
    </Tilt>
    <div className="project-text">
      <div className="project-description">{project.description}</div>
    </div>
    <div className="project-buttons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-btn--hero"
        href={project.liveUrl}
      >
        See Live
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn text-color-main"
        href={project.sourceUrl}
      >
        Source Code
      </a>
    </div>
    <div className="project-icons">
      {project.icons.map((icon) => (
        <div key={icon.label} className="icon-container">
          {' '}
          <img src={icon.src} alt={icon.label} className="project-icon" />
          <span className="icon-text">{icon.label}</span>
        </div>
      ))}
    </div>
  </div>
);

ProjectItem.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
};

const carouselProps = {
  showArrows: true,
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
          <ProjectItem key={project.id} project={project} />
        ))}
      </Carousel>
    </div>
  </section>
);

export default Projects;
