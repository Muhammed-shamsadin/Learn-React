# Learn-React

This repository contains React learning materials, organized into lectures. Each lecture folder is a standalone Vite-based React project with example components and exercises.

## Project Structure

- `Lecture-1/` — First React lecture project
- `Lecture-2/` — Second React lecture project

Each lecture folder contains:
- `src/` — Source code (components, main app)
- `public/` — Static assets
- `index.html` — Entry HTML file
- `package.json` — Project dependencies and scripts
- `vite.config.js` — Vite configuration

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/Muhammed-shamsadin/Learn-React.git
   cd Learn-React
   ```

2. **Install dependencies for a lecture:**
   Navigate to the desired lecture folder (e.g., `Lecture-1` or `Lecture-2`) and install dependencies:
   ```powershell
   cd Lecture-1
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```
   The app will be available at the URL shown in the terminal (usually http://localhost:5173).

## Linting

Each lecture project includes ESLint configuration. To run lint checks:
```powershell
npm run lint
```

## Customization

Feel free to modify or add new components in the `src/components/` folder of each lecture project.

## License

This project is for educational purposes.
