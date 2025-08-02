import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onSelect }) => {
  return (
    <div className="language-selector">
      <select 
        value={selectedLanguage} 
        onChange={(e) => onSelect(e.target.value)}
        className="language-dropdown"
      >
        <option value="">All Languages</option>
        {languages.map(lang => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;