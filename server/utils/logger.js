'use strict';

var winston = require('winston'),
    fs = require('fs');

var LOG_DIRECTORY = __dirname + '/../../logs';

if (!fs.existsSync(LOG_DIRECTORY )){
  fs.mkdirSync(LOG_DIRECTORY );
}

var logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      colorize: 'all',
      level: 'debug',
      prettyPrint: true
    }),
    new (winston.transports.File)({
      name: 'logfile',
      datePattern: '.yyyy-MM-ddTHH',
      filename: LOG_DIRECTORY + '/app.log',
      level: 'debug',
      json:false
    })
  ]
});

module.exports = logger;
