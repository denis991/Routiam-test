import React from 'react';

const RepositoryCard = ({ repository }) => {
  const handleProjectClick = () => {
    window.open(repository.html_url, '_blank');
  };

  const handleAuthorClick = () => {
    window.open(repository.owner.html_url, '_blank');
  };

  return (
    <div>
      <h3>{repository.name}</h3>
      <p>Author: {repository.owner.login}</p>
      <p>Stargazers: {repository.stargazers_count}</p>
      <p>Watchers: {repository.watchers_count}</p>
      <button onClick={handleProjectClick}>View Project</button>
      <button onClick={handleAuthorClick}>View Author</button>
    </div>
  );
};

export default RepositoryCard;
