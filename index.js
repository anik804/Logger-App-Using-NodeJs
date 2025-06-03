// console.log(process);
// console.log(process.argv)

const path = require("path");
const fs = require("fs");

const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");

const timeStamp = new Date().toLocaleString();

const message = `${text} ${timeStamp}\n`

if( !message ) {
    console.log("Please provide some text to log.");
    console.log("Example: node index.js 'Hello, World!'");
    process.exit(1);
}
// console.log(text);

const filePath = path.join(__dirname,"log.txt");


fs.appendFile(filePath, message , {encoding : "utf-8"} , () =>{
  console.log("Text logged successfully!");
  console.log("You can check the log.txt file in the Logger-App directory.");
})


console.log("Logging to file:", filePath);