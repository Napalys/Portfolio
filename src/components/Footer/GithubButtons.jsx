import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/Napalys/Portfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork portfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/Napalys/Portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star portfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
