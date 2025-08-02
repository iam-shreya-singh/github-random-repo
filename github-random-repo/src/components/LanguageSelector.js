import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onSelect, loading }) => {
  return (
    <div className="language-selector">
      <select 
        value={selectedLanguage} 
        onChange={(e) => onSelect(e.target.value)}
        className="language-dropdown"
      >
        <option value="">{loading ? 'Loading languages...' : 'All Languages'}</option>
        {!loading && languages.map(lang => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;