import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from './GithubButtons';
import { scrollTop } from '../../custom_animations/custom_scrolling/customScrolling';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top" onClick={scrollTop}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/Napalys'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />

        {!isMobile && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
