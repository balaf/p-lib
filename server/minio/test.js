

var uploader = require('./index.js');

var file = "./index.js"

var etag = uploader.save("index.js", file, "plib");
