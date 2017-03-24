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
function save (bucket, filename, file) {
  return new Promise( (resolve,reject) => {
    minioClient.bucketExists(bucket, (err) => {
      if (err) {
         if (err.code == 'NoSuchBucket') {
            if (err) {
              return reject(err);
            }
            else {
              minioClient.fPutObject(bucket, filename, file, 'application/octet-stream', (err, etag) => {
                if (err) {
                  return reject(err)
                }
                else {
                  return resolve(etag);
                }
              });
            }
         }
         else {
           return reject(err);
         }
       }
       else {
         // bucket exists, upload the file
         minioClient.fPutObject(bucket, filename, file, 'application/octet-stream', (err, etag) => {
           if (err) {
             return reject(err)
           }
           else {
             return resolve(etag);
           }
         });
       }
     });
  });
}

function read (bucket, filename) {
  return new Promise( (resolve,reject) => {
    var file;
    minioClient.getObject(bucket, filename, (err, dataStream) => {
      if (err) {
        return reject(err);
      }
      else {
        return resolve(dataStream);
      }
    });
  });
}

function copy (bucket, name, source) {
  return new Promise( (resolve, reject) => {
    var conds = new Minio.CopyConditions()
    //conds.setMatchETag('bd891862ea3e22c93ed53a098218791d')
    minioClient.copyObject(bucket, nane, source, conds, function(e, data) {
      if (e) {
        return reject(e);
      }
      return resove(data);
    });
  });
};

function remove (bucket, filename) {
  return new Promise ((resolve,reject) => {
    minioClient.removeObject(bucket, filename, function(err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    })
  });
}

async function move (source, destination) {
  let sourcePath = '/'+source.bucket+'/'+source.filename;
  await copy(destination.bucket, destiname.filename, sourcePath);
  await remove(source.bucket, source.filename);
}

module.exports = {
  save: save,
  read: read,
  copy: copy,
  remove: remove,
  move: move
}
