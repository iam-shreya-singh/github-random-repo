const GITHUB_API = 'https://api.github.com';
const LANGUAGES_URL = 'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml';

export const fetchLanguages = async () => {
  try {
    console.log("Fetching languages from GitHub Linguist...");
    const response = await fetch(LANGUAGES_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch languages');
    }
    
    const yamlText = await response.text();
    
    // Parsing YAML to extract language names
    const languages = [];
    const lines = yamlText.split('\n');
    
    for (const line of lines) {
      // Skip empty lines, comments, and indented lines (which are properties)
      if (line && !line.startsWith(' ') && !line.startsWith('#') && line.includes(':')) {
        const languageName = line.split(':')[0].trim();
        if (languageName) {
          languages.push({
            value: languageName.toLowerCase(),
            label: languageName
          });
        }
      }
    }
    
    console.log(`Loaded ${languages.length} languages`);
    return languages;
  } catch (error) {
    console.error('Error fetching languages:', error);
    // Fallback to common languages if the fetch fails
    return [
      { value: "javascript", label: "JavaScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "typescript", label: "TypeScript" },
      { value: "csharp", label: "C#" },
      { value: "cpp", label: "C++" },
      { value: "php", label: "PHP" },
      { value: "go", label: "Go" },
      { value: "rust", label: "Rust" },
      { value: "ruby", label: "Ruby" }
    ];
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