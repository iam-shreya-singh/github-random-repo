import React from 'react';

const RepoCard = ({ repo }) => {
  if (!repo) return null;

  return (
    <div className="repo-card">
      <div className="repo-header">
        <h2>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.full_name}
          </a>
        </h2>
        {repo.language && (
          <span className="language-badge">{repo.language}</span>
        )}
      </div>
      
      <p className="description">{repo.description || 'No description available'}</p>
      
      <div className="stats">
        <span className="stat">⭐ {repo.stargazers_count.toLocaleString()}</span>
        <span className="stat">🍴 {repo.forks_count.toLocaleString()}</span>
        <span className="stat">🐛 {repo.open_issues_count.toLocaleString()}</span>
        <span className="stat">📅 {new Date(repo.created_at).getFullYear()}</span>
      </div>
      
      {repo.topics && repo.topics.length > 0 && (
        <div className="topics">
          {repo.topics.slice(0, 5).map(topic => (
            <span key={topic} className="topic">#{topic}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoCard;