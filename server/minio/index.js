var Minio = require('minio'),
    log = require('../utils/logger');

var minioClient = new Minio.Client({
    endPoint: 'play.minio.io',
    port: 9000,
    secure: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});

// create bucket in case it doesn't exist
async function save (filename, file, bucket) {
  minioClient.bucketExists(bucket, function(err) {
    if (err) {
       if (err.code == 'NoSuchBucket') {
         /// it doesn't exist - create it
         log.debug("bucket does not exist:", bucket)
         minioClient.makeBucket(bucket, 'us-east-1', function(err) {
          if (err) {
            return console.log('Error creating bucket.', err)
          }
          minioClient.fPutObject(bucket, filename, file, 'application/octet-stream', function (err, etag) {
            if (err) {
              log.error("[Minio]: File not saved:", err);
              return err
            }
            else {
              log.debug("[Minio]: File saved:", etag);
              return etag;
             }
           });
         });
       }
       else {
         log.error("[Minio]: Bucket Exists error:", err);
         return err
       }
    }
    else {
      // bucket exists, upload the file
      minioClient.fPutObject(bucket, filename, file, 'application/octet-stream', function (err, etag) {
        if (err) {
          log.error("[Minio]: File not saved:", err);
          return err
        }
        else {
          log.debug("[Minio]: File saved:", etag);
          return etag;
        }
      })
    }
  })
}

async function read (bucket, filename) {
  var file;
  minioClient.getObject(bucket, filename, function(err, dataStream) {
    if (err) {
      log.error("[Minio] Read File Error",err)
      return err;
    }
    dataStream.on('data', function(chunk) {
      file += chunk
    })
    dataStream.on('end', function() {
      return file;
    })
    dataStream.on('error', function(err) {
      log.error("[Minio] Read File unterrupted",err)
      return err;
    })
  })
}

module.exports = {
  save: save,
  read: read
}
