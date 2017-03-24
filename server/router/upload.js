var log = require('../utils/logger'),
    uploader = require('../minio');


async function save(ctx,next) {
  try {
    log.error("[Router] Uploader Save: ");
    await uploader.save();
  }
  catch (err) {
    log.error("[Router] Uploader error: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
};

async function get (ctx,next) {
  try {
    log.error("[Router] Uploader Get: ");
    let fileStream = await uploader.read("plib",ctx.params.id);
    ctx.body = fileStream;
  }
  catch (err) {
    log.error("[Router] Uploader error: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
};


module.exports = {
  save: save,
  get: get
};
