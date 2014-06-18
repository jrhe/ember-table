// Generated by CoffeeScript 1.7.1
(function() {
  require('lib/bootstrap/bootstrap');

  require('lib/antiscroll/antiscroll');

  require('dependencies/ember-addepar-mixins/resize_handler');

  require('dependencies/ember-addepar-mixins/style_bindings');

  require('dist/ember-table');

  require('dependencies/date');

  require('lib/d3/d3');

  require('dependencies/horizon');

  window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  require('build/app/data/data');

  require('build/app/controllers/ajax');

  require('build/app/controllers/bars');

  require('build/app/controllers/dynamic_bars');

  require('build/app/controllers/editable');

  require('build/app/controllers/financial');

  require('build/app/controllers/fluid');

  require('build/app/controllers/horizon');

  require('build/app/controllers/overview');

  require('build/app/controllers/simple');

  require('build/app/controllers/sparkline');

  require('build/app/controllers/treetable');

  require('build/app/views/mixins');

  require('build/app/views/ember_table');

  require('build/app/views/ember_table/ajax');

  require('build/app/views/ember_table/bars');

  require('build/app/views/ember_table/editable');

  require('build/app/views/ember_table/financial');

  require('build/app/views/ember_table/horizon');

  require('build/app/views/ember_table/sparkline');

  require('build/app/views/ember_table/treetable');

  require('build/app/router');

  require('build/app/main');

  require('build/app/templates');

  window['PR_SHOULD_USE_CONTINUATION'] = false;

}).call(this);
