console.log("Webpack is working!")
import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body")
    const example = new Example(body)
});