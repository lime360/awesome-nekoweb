import { marked } from "marked";
import * as fs from "node:fs";

const target = fs.readFileSync("README.md", { encoding: "utf-8" });
const document = marked.parse(target);
const outputHTML = `
<!DOCTYPE html>
<html>
    <head>
        <title>Awesome Nekoweb</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
        <meta name="description" content="Curated list for all things Nekoweb." />
        <meta name="author" content="lime360" />
    </head>
    <body>
        ${document}
    </body>
</html>
`;
fs.mkdirSync("dist", { recursive: true });
const output = fs.writeFileSync("dist/index.html", outputHTML);