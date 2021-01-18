const myModule = require("./my-module");
console.log(myModule.foo);

const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);

const cliOptions = {
    gfm: false,
    ...program.opts(),
};

const filePath = program.args[0];
fs.readFile(filePath, {encoding: "utf8"}, (err, file) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
        return;
    }
    const html = md2html(file, cliOptions);
    console.log(html);
});