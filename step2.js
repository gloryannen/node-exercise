const fs = require("fs");
const axios = require('axios');

function cat(path) {
    fs.readFile(path, "utf-8", function (err, data) {
        if (err) {
            console.log(`Error reading ${path}, ${err}`)
            process.exit(1);
        }
        console.log(data)
    })
}

async function webCat(url) {
    try {
        let res = await axios.get(url)
        console.log(res.data)
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`)
        process.exit(1);
    }
}

// webCat("http://google.com")
// webCat("http://rithmschool.com/no-such-path")