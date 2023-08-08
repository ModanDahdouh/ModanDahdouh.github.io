const sass = require("sass");

const result = sass.compile("/assets/styles/style.scss");
console.log(result.css);
