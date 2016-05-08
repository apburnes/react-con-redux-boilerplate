import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class GithubButton extends Component {
  render () {
    const { url, user, repo } = this.props;

    return (
      <div>
        <a className='github-button'
          href={url}
          data-icon='octicon-star'
          data-style='mega'
          data-count-href={`/${user}/${repo}/stargazers`}
          data-count-api={`/repos/${user}/${repo}#stargazers_count`}
          data-count-aria-label='# stargazers on GitHub'
          aria-label={`Star ${user}/${repo} on GitHub`}>Star</a>
      </div>
    );
  }
}

GithubButton.propTypes = {
  repo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class HomePage extends Component {
  render() {
    const { projectInfo, dispatch } = this.props;
    const { title, repo, user } = projectInfo;

    return (
      <div className='flex justify-center items-center' style={{height: '100vh'}}>
        <div className='col col-4 mx-auto center'>
          <h1>{title}</h1>
          <GithubButton {...projectInfo} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  projectInfo: PropTypes.shape({
    repo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};

function select(state) {
  const { projectInfo } = state;

  return {
    projectInfo: projectInfo.toJS()
  };
}

export default connect(select)(HomePage);
