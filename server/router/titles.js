var log = require('../utils/logger'),
    Title = require ('../model/title'),
    db = require('../data/title');


async function getAll(ctx,next) {
  log.debug("[Router] Get Titles: ", ctx.request.body);
  try {
    let result = await db.getAll();
    ctx.body = result;
    log.debug("[Router] Get Titles Successfull: ", ctx.body);
  } catch (err) {
    log.error("[Router] Get Titles Error: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }

}

async function getById(ctx,next) {
  log.debug("[Router] Get Title by Id: ", ctx.params);
  try {
    let result = await db.getById(ctx.params.id);
    ctx.body = result;
    log.debug("[Router] Get Title by Id Successfull: ", ctx.body);
  } catch (err) {
    log.error("[Router] Get Title by Id Error: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
}

async function create(ctx,next) {
  log.debug("[Router] Create Title: ", ctx.request.body);
  try {
    let title = new Title(ctx.request.body);
    log.debug("[Router] Title Object: ", title);

    let result = await db.save(title);
    ctx.body = result;
    log.debug("[Router] Create Title Successfull: ", ctx.body);
  } catch (err) {
    log.error("[Router] Create Title Error: ", err);
    //TODO
    // not throw 5xx error for bad requests
    throw err;
  }
}

async function update(ctx,next) {
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

module.exports = {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update
};
