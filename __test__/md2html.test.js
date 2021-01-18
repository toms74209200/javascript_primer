const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

test("converts Markdown to HTML (GFM=false)", () => {
    const sample = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/sample.md"),
        { encoding: "utf8" }
    );
    const expected = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/expected.html"),
        { encoding: "utf8" }
    );
    expect(md2html(sample, {gfm: false}).trimEnd()).toBe(expected.trimEnd());
});

test("converts Markdown to HTML (GFM=true)", () => {
    const sample = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/sample.md"),
        { encoding: "utf8" }
    );
    const expected = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/expected-gfm.html"),
        { encoding: "utf8" }
    );
    expect(md2html(sample, {gfm: true}).trimEnd()).toBe(expected.trimEnd());
});