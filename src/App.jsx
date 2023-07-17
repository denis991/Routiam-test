import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from './redux/actions';
import RepositoryCard from './components/RepositoryCard';

const App = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(state => state.repositories);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchRepositories(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {repositories.map(repository => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
};

export default App;
