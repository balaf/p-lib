var log = require('../utils/logger');


module.exports.getAll = async function(ctx,next) {
  log.debug("[Router] Get Authors: ", ctx.request.body);
  try {
    log.debug("try");
  } catch (err) {
    log.error("[Router] Get Authors: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
  ctx.body = { 'result': 'ok'};
  log.debug("[Router] Get Authors: ", ctx.body);
}

module.exports.getById = async function(ctx,next) {
  log.debug("[Router] Get Authors by Id: ", ctx.params);
  try {
    log.debug("try");
  } catch (err) {
    log.error("[Router] Get Authors by Id: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
  ctx.body = { 'result': 'ok'};
  log.debug("[Router] Get Authors by Id: ", ctx.body);
}
