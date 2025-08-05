# RepoFinder | A GitHub Discovery Engine

A dynamic and responsive web app built with React to help developers discover new and interesting open-source projects on GitHub through a streamlined, filterable interface.

**[🚀 Live Demo](https://github-random-repo-ten.vercel.app/)** | **[📄 Source Code](https://github.com/iam-shreya-singh/github-random-repo)**

![Animation Demo](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2YyN3gwZjBzMHY3ODRyeW52NW1wcXBmdnBneW5ramE1dDhkMTl3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QZppKarljdI8mWg0Bs/giphy.gif)

## ✨ Core Features

- **Dynamic Project Discovery:** Fetches and displays repositories in real-time using the official GitHub REST API.
- **Intuitive Language Filtering:** Allows users to instantly narrow down search results by programming language for more relevant discovery.
- **Seamless User Experience:** Implemented skeleton loaders during data fetching to provide clear visual feedback and prevent jarring content layout shifts.
- **Robust Error Handling:** Gracefully manages API errors (e.g., rate limits, network issues) and displays user-friendly messages instead of a broken page.
- **Engaging UI/UX:** Utilizes the Framer Motion library to create fluid page transitions and interactions that make the application feel modern and responsive.
- **Fully Responsive Design:** Ensures a consistent and accessible layout across all devices, from mobile phones to widescreen desktops.

## 🛠️ Tech Stack & Tools

- **Frontend:** React, JavaScript (ES6+), HTML5, CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Animations:** Framer Motion
- **API Communication:** Fetch API
- **Deployment & CI/CD:** Vercel

## 🧠 Key Technical Challenges & Solutions

This project provided an opportunity to solve several common frontend development challenges:

#### 1. Efficiently Managing Asynchronous State
*   **Problem:** The application's UI needed to react to several asynchronous states simultaneously: a loading state while fetching data, an error state if the API call failed, and a success state with the repository data.
*   **Solution:** I leveraged React Hooks (`useState`, `useEffect`) to create a clean and declarative state management system. This approach isolates state logic and ensures the UI always reflects the current data status accurately, providing a predictable and stable user experience.

#### 2. Creating a Polished Loading Experience
*   **Problem:** Simply showing a "Loading..." message can cause the page content to jump and reflow when data arrives, which is a poor user experience known as "layout shift."
*   **Solution:** I designed and implemented a `LoadingSkeleton` component that mimics the final layout of the repository card. This reserves the necessary space on the screen during the fetch, providing a smooth and professional transition from the loading state to the final UI.

## 🚀 Getting Started Locally 

1.  Clone the repository:
    ```bash
    git clone https://github.com/iam-shreya-singh/github-random-repo.git
    ```
2.  Navigate to the project's root directory:
    ```bash
    cd github-random-repo/github-random-repo
    ```
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```
5.  Open `http://localhost:3000` in your browser.
