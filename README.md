# GitHub Random Repo Explorer

A JavaScript web application that discovers random GitHub repositories with filtering capabilities.

## Project Overview

This project is a frontend implementation of the [GitHub Random Repo Explorer challenge](https://roadmap.sh/projects/github-random-repo) from Roadmap.sh. 

- Work with REST APIs (GitHub API)
- Implement responsive UI design
- Create smooth animations with Framer Motion
- Handle loading states and error scenarios
- Structure a React application effectively

## Running Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open `http://localhost:3000` in your browser

### Animation Demo
![Animation Demo]([/workspaces/github-random-repo/github-random-repo/public/working_state.gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2YyN3gwZjBzMHY3ODRyeW52NW1wcXBmdnBneW5ramE1dDhkMTl3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QZppKarljdI8mWg0Bs/giphy.gif))

## Features

- **Random Repository Discovery**: Fetch random repositories from GitHub
- **Language Filtering**: Filter repositories by programming language
- **Refresh Functionality**: Get new repositories without page reload
- **Responsive Design**: Optimized for all device sizes
- **Loading States**: Skeleton screens during data fetching
- **Error Handling**: User-friendly error messages
- **Smooth Animations**: transitions with Framer Motion

## Technical Implementation

### Tech Stack
- **React**: Core UI framework
- **GitHub API**: Data source for repositories
- **Framer Motion**: Animation library
- **CSS**: Styling with custom properties
- **Create React App**: Project setup

### Key Components
- `App.js`: Main application logic and state management
- `RepoCard.js`: Displays repository information
- `LanguageSelector.js`: Language filtering dropdown
- `ErrorMessage.js`: Error message display
- `LoadingSkeleton.js`: Loading state UI

### API Integration
- **Languages Endpoint**: `https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`
- **Repositories Endpoint**: `https://api.github.com/search/repositories`

