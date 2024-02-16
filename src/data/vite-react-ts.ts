export const article = {
    title: "Vite: Create a New React TypeScript Project",
    id: "0103", // keep it 0101+
    tech: "vite",
    author: "",
    source: "",
    body: `
    <p>Open Terminal: Launch your command line interface.</p>

    <p>Create new Project:</p>
    <p>Use the Vite command to create a new project. Replace <i>my-app</i> with your desired project name.</p>
    <code>npm create vite@latest my-app -- --template react-ts</code>

    <p>Navigate to the Project Directory:</p>
    <code>cd my-app</code>

    <p>Install Dependencies:</p>
    <code>npm install</code>

    <p>Install GitHub Pages:</p>
    <code>npm install gh-pages --save-dev</code>

    <p>Add base to vite.config.ts file:</p>
    <code>base: "/my-app/",</code>

    <p>Add homepage to package.json:</p>
    <code>"homepage": "https://github.com/sergeymoryakov/my-app.git",</code>

    <p>Add a few scripts to package.json:</p>
    <code>        "start": "npm run dev",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"</code>

    <p>Start the Development Server:</p>
    <code>npm start</code>

    <p>Deploy project to gh-pages:</p>
    <code>npm run deploy</code>

    `,
};
