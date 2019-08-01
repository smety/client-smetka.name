const routes = module.exports = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('contact', '/contact', 'contact')
  .add('skill', '/skill', 'skill')
  .add('project', '/project', 'project');
