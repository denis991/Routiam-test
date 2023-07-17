import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const RepositoryCard = ({ repository }) => {
  const handleProjectClick = useCallback(() => {
    window.open(repository.html_url, '_blank');
  }, [repository.html_url]);

  const handleAuthorClick = useCallback(() => {
    window.open(repository.owner.html_url, '_blank');
  }, [repository.owner.html_url]);

  return (
    <div className="repository-card">
      <h3>{repository.name}</h3>
      <p>Author: {repository.owner.login}</p>
      <p>Stargazers: {repository.stargazers_count}</p>
      <p>Watchers: {repository.watchers_count}</p>
      <button onClick={handleProjectClick}>View Project</button>
      <button onClick={handleAuthorClick}>View Author</button>
    </div>
  );
};

RepositoryCard.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }).isRequired,
    stargazers_count: PropTypes.number.isRequired,
    watchers_count: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default RepositoryCard;
