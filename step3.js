const fs = require("fs");
const axios = require('axios');
const process = require('process');

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3]
    path = process.argv[4]
} else {
    path = process.argv[2]
}

function cat(path, out) {
    fs.readFile(path, "utf-8", function (err, data) {
        if (err) {
            console.log(`Error reading ${path}, ${err}`)
            process.exit(1);
        }
        handleOutput(data, out);
    })
}

async function webCat(url, out) {
    try {
        let res = await axios.get(url)
        handleOutput(res.data, out);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`)
        process.exit(1);
    }
}

function handleOutput(text, out) {
    if (out) {
        fs.writeFile(out, text, "utf-8", function (err) {
            if (err) {
                console.log(`Couldn't write ${out}: ${err}`)
                process.exit(1);
            }
        })
    }
    console.log(text);
}
// handleOutput("new.txt", "one.txt")
// handleOutput("one.txt", "new.txt")
// handleOutput("http://google.com", "new.txt")