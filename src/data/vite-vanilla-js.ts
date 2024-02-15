export const article = {
    title: "Vite: Create a New Vite Vanilla Project",
    id: "0102", // keep it 0101+
    tech: "vite",
    author: "",
    source: "",
    body: `
    <p>Open Terminal: Launch your command line interface.</p>

    <h3>Create the Project:</h3>
    <p>Use the Vite command to create a new project. Replace <i>my-vanilla-project</i> with your desired project name.</p>
    <div class="code-block">npm create vite@latest my-vanilla-project -- --template vanilla</div>

    <h3>Navigate to the Project Directory:</h3>
    <div class="code-block">cd my-vanilla-project</div>

    <h3>Install Dependencies:</h3>
    <p>Even if you're starting with a simple setup, it's a good idea to run <code>npm install</code> to set up the node_modules directory.</p>
    <div class="code-block">npm install</div>

    <h3>Start the Development Server:</h3>
    <p>To see your project in action and take advantage of Vite's hot module replacement and other development features:</p>
    <div class="code-block">npm run dev</div>

    <h3>Possible Folder Structure:</h3>
    <div class="code-block">
        src/<br>
        │<br>
        ├── assets/                 # Static assets<br>
        │   ├── fonts/              # Custom fonts<br>
        │   ├── images/             # Images<br>
        │   └── models/             # 3D models<br>
        │<br>
        ├── styles/                 # CSS files<br>
        │   ├── common.css          # Common styles<br>
        │   └── ...                 # Other CSS files<br>
        │<br>
        ├── components/             # Reusable components<br>
        │   ├── Button.js           # Button component<br>
        │   ├── Card.js             # Card component<br>
        │   └── ...                 # Other components<br>
        │<br>
        ├── utils/                  # Utility functions (if needed)<br>
        │<br>
        └── main.js                 # Main JavaScript file (entry point)
    </div>
    <p>Notes:</p>
    <ul>
        <li>Assets: Store fonts, images, and 3D models in the assets folder. This separation makes it easier to manage and reference these resources in your CSS and JavaScript files.</li>
        <li>Styles: Keep your CSS files in the styles folder. You might have a <code>common.css</code> for shared styles and additional CSS files for specific parts of your site.</li>
        <li>Components: For JavaScript files that represent reusable components (like buttons, cards, etc.), the components folder is an organized way to store them.</li>
        <li>Utility Functions: If you have JavaScript functions that are used in multiple places, they can be organized under the utils folder.</li>
        <li>Main.js: This is the entry point of your application. It's where you can import your components and styles, and it's linked from your index.html.</li>
    </ul>
    `,
};
