import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from './redux/actions';
import RepositoryCard from './components/RepositoryCard';
import './App.css'; // Импортируем файл стилей

const App = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchRepositories(searchTerm));
  };

  return (
    <div className="app">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
};

export default App;
