var log = require('../utils/logger');


module.exports.getAll = async function(ctx,next) {
  log.debug("[Router] Get Titles: ", ctx.request.body);
  try {
    log.debug("try");
  } catch (err) {
    log.error("[Router] Get Titles: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
  ctx.body = { 'result': 'ok'};
  log.debug("[Router] Get Titles: ", ctx.body);
}

module.exports.getById = async function(ctx,next) {
  log.debug("[Router] Get Title by Id: ", ctx.params);
  try {
    log.debug("try");
  } catch (err) {
    log.error("[Router] Get Title by Id: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
  ctx.body = { 'result': 'ok'};
  log.debug("[Router] Get Title by Id Id: ", ctx.body);
}

module.exports.create = async function(ctx,next) {
  log.debug("[Router] Create Title: ", ctx.request.body);
  try {
    log.debug("try");
  } catch (err) {
    log.error("[Router] Create Title: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
  ctx.body = { 'result': 'ok'};
  log.debug("[Router] Create Title: ", ctx.body);
}

module.exports.update = async function(ctx,next) {
  log.debug("[Router] Get Update Title: ", ctx.params);
  try {
    log.debug("try");
  } catch (err) {
    log.error("[Router]  Get Update Title: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
  ctx.body = { 'result': 'ok'};
  log.debug("[Router]  Get Update Title: ", ctx.body);
}
