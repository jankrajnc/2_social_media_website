//The idea is to load all the routes here, so that the app.js is less cluttered. 
const index = require('../routes/index');
const users = require('../routes/users');
//const likes = require('../routes/likes');
const logger = require("./log-util").getLogger();

function mountRoutes(app) {
  try {
    app.use('/', index);
    app.use('/users', users);
    //app.use('/likes', likes);
  } catch (error) {
    logger.error("Error mounting routes", error);
  }
}

module.exports.mountRoutes = mountRoutes;
