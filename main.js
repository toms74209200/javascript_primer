const myModule = require("./my-module");
console.log(myModule.foo);

const program = require("commander");
const fs = require("fs");

program.parse(process.argv);

const filePath = program.args[0];
fs.readFile(filePath, {encoding: "utf8"}, (err, file) => {
    console.log(file);
});