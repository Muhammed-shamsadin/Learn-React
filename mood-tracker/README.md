# Mood Tracker React App

This is a simple React application for tracking moods, demonstrating basic routing, state management, and dynamic page routing using React Router.

## Features
- Home page for mood tracking
- History page to view mood history
- Dynamic page routing example
- Static data list linking to dynamic pages

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository or download the project files.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Dynamic Routing Demo

To see dynamic routing in action:
1. Visit `/page-list` to see a list of sample items.
2. Click any item to navigate to `/page/:id`, where `:id` is the item's ID.
3. The dynamic page will display the ID from the URL.

## Project Structure

- `src/App.jsx` - Main app and router setup
- `src/pages/Home.jsx` - Home page
- `src/pages/History.jsx` - Mood history page
- `src/pages/DynamicPageList.jsx` - List of links to dynamic pages
- `src/pages/DynamicPage.jsx` - Dynamic page displaying the ID from the URL

## License

This project is for educational purposes.
