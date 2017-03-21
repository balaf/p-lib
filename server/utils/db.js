'use strict'

var log = require('./logger'),
    neo4j = require('neo4j-driver').v1;


const USER = "elias";
const PASSWORD = "b.uBWujq6kCc8q.3K8p9Yqzz8wBUSok";

const grapheneURL = "bolt://hobby-ancckedfjildgbkeajklgdol.dbs.graphenedb.com:24786";
const localURL = "bolt://localhost:7687";

//const URL = grapheneURL;
const URL = localURL;

var driver = neo4j.driver(URL, neo4j.auth.basic(USER, PASSWORD));

var session = driver.session();

// var Title = {
//   title : "Best Book",
//   authors: ["elias", "balafoutis"],
//   edition: neo4j.int(2),
//   pages: neo4j.int(143),
//   pubYear: 2015,
//   cover: null,
//   notes: null
// };
// var query = "CREATE (t:Title $Title) RETURN t";
//
// session
//     .run(query, {Title})
//     .then(function(result) {
//         result.records.forEach(function(record) {
//             console.log(record)
//         });
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

module.exports = driver.session();
