
const uuidV4 = require('uuid/v4');

module.exports = function Title (data) {
  this.title = data.title;
  this.authors = data.authors || [];
  this.publisher = data.publisher;
  this.pubYear = data.pubYear;
  this.notes = data.notes;
  this.cover = data.cover;
  this.pages = data.pages;
  this.id = data.id || uuidV4();
}
