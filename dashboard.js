const path = require('path');
const bodyParser = require('body-parser');
const DASHOARD_UI_ROOT = path.join(__dirname, 'dist');
const components = require(path.join(__dirname,'../../server/component-config.json'));

function configureRoutes(app, options) {
  const loopback = app.loopback;
  const router = new loopback.Router();
  router.get('/config', function getConfig(req, res, next) {
    res.send({
      "restApiRoot": app.get('restApiRoot'),
      "_modelerLink": components['oe-workflow-modeler/component'].mountPath
    }
    );
  })
  router.use(loopback.static(DASHOARD_UI_ROOT));
  return router;
}

module.exports = function wfdashboard(app, options) {
  options = Object.assign({}, {
    mountPath: '/wfdashboard'
  }, options);
  app.use(
    options.mountPath,
    configureRoutes(app, options)
  );
  app.set('oe-workflow-dashboard', options);
};