import React, { useState, useEffect } from 'react';
import { fetchLanguages, fetchRandomRepo } from './services/githubApi';
import LanguageSelector from './components/LanguageSelector';
import RepoCard from './components/RepoCard';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load languages on component mount
  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const langs = await fetchLanguages();
        setLanguages(langs);
      } catch (err) {
        setError('Failed to load languages');
      }
    };
    
    loadLanguages();
  }, []);

  // Fetch a random repository
  const handleFetchRepo = async () => {
    setLoading(true);
    setError('');
    setRepo(null);
    
    try {
      const randomRepo = await fetchRandomRepo(selectedLanguage);
      setRepo(randomRepo);
    } catch (err) {
      setError(err.message || 'Failed to fetch repository');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>GitHub Random Repo Explorer</h1>
        <p>Discover interesting repositories from GitHub</p>
      </header>

      <main className="main-content">
        <div className="controls">
          <LanguageSelector 
            languages={languages} 
            selectedLanguage={selectedLanguage} 
            onSelect={setSelectedLanguage} 
          />
          <button 
            onClick={handleFetchRepo} 
            disabled={loading}
            className="fetch-button"
          >
            {loading ? 'Loading...' : 'Get Random Repo'}
          </button>
        </div>

        <ErrorMessage message={error} />
        
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching awesome repositories...</p>
          </div>
        )}
        
        <RepoCard repo={repo} />
      </main>
    </div>
  );
}

export default App;