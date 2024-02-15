export const article = {
    title: "Vite: Create a New React TypeScript Project",
    id: "0103", // keep it 0101+
    tech: "vite",
    author: "",
    source: "",
    body: `
    <p>Open Terminal: Launch your command line interface.</p>

    <h3>Create new Project:</h3>
    <p>Use the Vite command to create a new project. Replace <i>my-app</i> with your desired project name.</p>
    <div class="code-block">npm create vite@latest my-app -- --template react-ts</div>

    <h3>Navigate to the Project Directory:</h3>
    <div class="code-block">cd my-app</div>

    <h3>Install Dependencies:</h3>
    <div class="code-block">npm install</div>

    <h3>Install GitHub Pages:</h3>
    <div class="code-block">npm install gh-pages --save-dev</div>

    <h3>Add base to vite.config.ts file:</h3>
    <div class="code-block">base: "/my-app/",</div>

    <h3>Add homepage to package.json:</h3>
    <div class="code-block">"homepage": "https://github.com/sergeymoryakov/my-app.git",</div>

    <h3>Add a few scripts to package.json:</h3>
    <div class="code-block">        "start": "npm run dev",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"</div>

    <h3>Start the Development Server:</h3>
    <div class="code-block">npm start</div>

    <h3>Deploy project to gh-pages:</h3>
    <div class="code-block">npm run deploy</div>

    `,
};
