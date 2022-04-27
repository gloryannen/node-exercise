const fs = require("fs");

function cat(path) {
    fs.readFile(path, "utf-8", function (err, data) {
        if (err) {
            console.log(`Error reading ${path}, ${err}`)
            process.exit(1)
        }
        console.log(data)
    })
}

// cat("one.txt")
// cat("huh.txt")