// View Class
class View {
    constructor(controller) {
        this.controller = controller;
        this.inputField = document.getElementById("inputField");
        this.addButton = document.getElementById("addButton");
        this.postList = document.getElementById("postList");

        this.addButton.addEventListener("click", this.handleAddPost.bind(this));
    }

    handleAddPost() {
        const userInput = this.inputField.value;
        if (userInput.trim() !== "") {
            this.controller.addPost(userInput);
            this.inputField.value = "";
        }
    }

    displayPosts(posts) {
        this.postList.innerHTML = "";
        posts.forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post;
            this.postList.appendChild(li);
        });
    }
}

// Model Class
class Model {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }
}

// Controller Class
class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
    }

    addPost(post) {
        this.model.addPost(post);
        this.view.displayPosts(this.model.posts);
    }
}

// Initialize the application
const controller = new Controller();

// Same 'View' module
// Example to avoid usage of the 'bind(this)' in eventHandler
// by using arrow function
// View Class
class View {
    constructor(controller) {
        this.controller = controller;
        this.inputField = document.getElementById("inputField");
        this.addButton = document.getElementById("addButton");
        this.postList = document.getElementById("postList");

        // No need for 'bind(this)' here because handleAddPost is an arrow function
        this.addButton.addEventListener("click", () => this.handleAddPost());
    }

    handleAddPost() {
        const userInput = this.inputField.value;
        if (userInput.trim() !== "") {
            this.controller.addPost(userInput);
            this.inputField.value = "";
        }
    }

    displayPosts(posts) {
        this.postList.innerHTML = "";
        posts.forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post;
            this.postList.appendChild(li);
        });
    }
}

// Rest of the classes and initialization remain the same...
