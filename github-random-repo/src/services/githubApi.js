const GITHUB_API = 'https://api.github.com';
const LANGUAGES_URL = 'https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json';

export const fetchLanguages = async () => {
  try {
    const response = await fetch(LANGUAGES_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching languages:', error);
    return [];
  }
};

export const fetchRandomRepo = async (language = '') => {
  try {
    const query = language ? `stars:>100+language:${language}` : 'stars:>100';
    const url = `${GITHUB_API}/search/repositories?q=${query}&sort=stars&order=desc&per_page=100`;
    
    const response = await fetch(url);
    
    if (response.status === 403) {
      throw new Error('API rate limit exceeded. Try again later!');
    }
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const data = await response.json();
    
    if (data.items.length === 0) {
      throw new Error('No repositories found');
    }
    
    const randomIndex = Math.floor(Math.random() * data.items.length);
    return data.items[randomIndex];
  } catch (error) {
    console.error('Error fetching repo:', error);
    throw error;
  }
};