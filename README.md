# React + TypeScript + Vite

npm install
npm run build
npm run deploy <- deploy to git gh-pages, package npm install gh-pages --save-dev

Looking into makeswift.com
npx makeswift@latest

npm install
npm run dev
Starts the development server.

npm run build
Builds the app for production.

npm start
Runs the built app in production mode.

We suggest that you begin by typing:

cd nomad-nexus
npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Digital Nomad LLC Website - Hacker Theme

This is a React application for Digital Nomad LLC, featuring a modern "software hacker" aesthetic.

## Project Structure

The project follows a standard React application structure:

* `public/`: Contains the `index.html` file and static assets (like your logo).
* `src/`: Contains the React components and main application logic.
    * `App.js`: The main React component for the website.
    * `index.js`: The entry point for the React application.
* `package.json`: Project metadata and dependencies.
* `README.md`: This file.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Create a new directory** for your project and navigate into it:
    ```bash
    mkdir digital-nomad-hacker-site
    cd digital-nomad-hacker-site
    ```

2.  **Create the `public` and `src` directories**:
    ```bash
    mkdir public src
    ```

3.  **Create the files** inside these directories and paste the respective code provided above:
    * `public/index.html`
    * `src/App.js`
    * `src/index.js`
    * `package.json`
    * `README.md`

4.  **Place your logo image**:
    Save your `digitial_nomad_logo.png` file into the `public/` directory.

5.  **Install dependencies**:
    Open your terminal in the project's root directory (where `package.json` is located) and run:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

6.  **Start the development server**:
    Once dependencies are installed, you can start the application:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

This will open the website in your browser, usually at `http://localhost:3000`.

## Technologies Used

* **React**: JavaScript library for building user interfaces.
* **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
* **Lucide React**: For scalable vector icons.
* **Google Fonts**: For the 'Space Mono' typeface.

## Customization

* **Content**: Edit `src/App.js` to change text, links, and sections.
* **Styling**: Modify the Tailwind CSS classes within `App.js` or the custom CSS in `public/index.html` to further refine the look.
* **Logo**: Ensure your `digitial_nomad_logo.png` is in the `public/` folder.

