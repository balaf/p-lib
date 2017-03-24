

var uploader = require('./index.js');

var file = "./index.js"

uploader.save('plib','newIndex.js', file).then( (etag) => {
  console.log("Etag:", etag);
})


//  uploader.read("plib","index.js").then(function(obj){
//    obj.pipe(process.stdout)
// })
// .catch(function(err){
//   console.log("Error,", err);
// });
