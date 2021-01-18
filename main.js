const myModule = require("./my-module");
console.log(myModule.foo);

const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const options = program.opts();
console.log(options.gfm);

const filePath = program.args[0];
fs.readFile(filePath, {encoding: "utf8"}, (err, file) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
        return;
    }
    const html = marked(file, 
        {
            gfm: false
        });
    console.log(html);
});