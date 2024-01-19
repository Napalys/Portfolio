import React from 'react';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title/Title';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { projects } from './ProjectLoader';
import Project from './Project';

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
      <div className="project-description">
        {project.description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
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
      {project.sourceUrl ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn text-color-main"
          href={project.sourceUrl}
        >
          Source Code
        </a>
      ) : (
        <button className="cta-btn" disabled>
          {project.sourceUrl === '' ? 'Closed Source' : 'No Source Available'}
        </button>
      )}
    </div>
    <div className="project-icons">
      {project.icons.map((icon) => (
        <div key={icon.label} className="icon-container">
          {' '}
          <img
            src={require(`../../images/logos/${icon.src}`).default}
            alt={icon.label}
            className="project-icon"
          />
          <span className="icon-text">{icon.label}</span>
        </div>
      ))}
    </div>
  </div>
);

ProjectItem.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
};
const CustomArrow = ({ direction, onClick }) => {
  const arrowClass = `custom-arrow custom-arrow-${direction}`;
  return (
    <button className={arrowClass} onClick={onClick}>
      {direction === 'left' ? '←' : '→'}
    </button>
  );
};
const carouselProps = {
  showArrows: true,
  autoPlay: true,
  infiniteLoop: true,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  swipeable: false,
  interval: 7500,
  renderArrowPrev: (onClickHandler, hasPrev) =>
    hasPrev && <CustomArrow direction="left" onClick={onClickHandler} />,
  renderArrowNext: (onClickHandler, hasNext) =>
    hasNext && <CustomArrow direction="right" onClick={onClickHandler} />,

};

const Projects = () => (
  <section
    id="projects"
    style={{
      gridArea: '1/1',
      zIndex: 0,
      position: 'relative',
      placeItems: 'center',
      display: 'grid',
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
