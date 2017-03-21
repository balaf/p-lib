
var log = require('../utils/logger'),
    db = require('../utils/db');

async function save (title) {
  log.debug("[Data Mgr] Sabe Title: ", title);

  const query = [
    'CREATE (t:Title $title) return t'
  ].join(' ');

  try {
    return await db.run(query,{title})
  } catch (err) {
    log.error("[Data] Save Title:", err);
    throw err;
  }
}

async function getById (id) {
  const query = [
    'MATCH (t:Title {id:{_id}}) return t'
  ].join(' ');

  try {
    return await db.run(query,{_id:id})
  } catch (err) {
    log.error("[Model] Get Title by ID:", err);
    throw err;
  }
}

async function getAll (){
  //todo: paging
  const query = [
    'MATCH (t:Title) return t'
  ].join(' ');

  try {
    return await db.run(query)
  } catch (err) {
    log.error("[Model] Get All Titles:", err);
    throw err;
  }
}

async function getByAttr(attr){

}

module.exports = {
  save: save,
  getById: getById,
  getByAttr: getByAttr,
  getAll, getAll
}
