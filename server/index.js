'use strict';

var fs = require('fs'),
    https = require('https'),
    http = require('http'),
    Koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    Router = require('koa-router'),
    route = require('./router');

// TODO:
// move to conf file
const PORT= 3013
///

const app = new Koa();
const router = new Router();

router
  .get('/api/search', route.search)
  .get('/api/titles',route.titles.getAll)
  .post('/api/titles', route.titles.create)
  .get('/api/titles/:id', route.titles.getById)
  .patch('/api/titles/:id', route.titles.update)
  .post('/api/books', route.books.create)
  .patch('/api/books/:id', route.books.update)
  .get('/api/authors', route.authors.getAll)
  .get('/api/authirs/:id',route.authors.getById)

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

// uses async arrow functions
app.use(async (ctx, next) => {
  try {
    await next(); // next is now a function
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

if (process.env.NODE_ENV != "heroku") {
   var options = {
     key: fs.readFileSync(__dirname + '/ssl/server.key'),
     cert: fs.readFileSync(__dirname + '/ssl/server.crt')
   };
   https.createServer(options,app.callback()).listen(PORT);
   http.createServer(app.callback()).listen(PORT+1);

 }
 else {
   http.createServer(app.callback()).listen(PORT);
 }
