function download(url, dest) {
    const lib = url.startsWith("https") ? https : http;

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest, { flags: "wx" })

        const request = lib.get(url, response => {
            if (response.statusCode === 200) {
                response.pipe(file)
            } else {
                file.close()
                fs.unlink(dest, () => {}); // Delete temp file
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`)
            }
        });

        request.on("error", err => {
            file.close()
            fs.unlink(dest, () => {}) // Delete temp file
            reject(err.message)
        });

        file.on("finish", () => {
            resolve()
        });

        file.on("error", err => {
            file.close()

            if (err.code === "EEXIST") {
                reject("File already exists");
            } else {
                fs.unlink(dest, () => {}); // Delete temp file
                reject(err.message)
            }
        })
    })
}

module.exports = {download};
