import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="repo-card">
      <div className="repo-header">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-badge"></div>
      </div>
      
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      
      <div className="skeleton-stats">
        <div className="skeleton skeleton-stat"></div>
        <div className="skeleton skeleton-stat"></div>
        <div className="skeleton skeleton-stat"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;