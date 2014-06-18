Ember.TEMPLATES["_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Overview &amp; Getting Started");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("API &amp; Documentation");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Hello World Table");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("AJAX cells");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Bar cells");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Dynamic bar cells");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Tree &amp; financial table");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("Editable cells");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Sparkline cells");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("Horizon cells");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("Fluid table");
  }

function program23(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program25(depth0,data) {
  
  
  data.buffer.push("License");
  }

  data.buffer.push("\n<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-md-offset-6\">\n        <ul class=\"list-unstyled\">\n          <li><h6>Ember Table</h6></li>\n          <li><a href=\"#\"></a></li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.overview", options) : helperMissing.call(depth0, "link-to", "emberTable.overview", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.documentation", options) : helperMissing.call(depth0, "link-to", "emberTable.documentation", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li class=\"bumper-30\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.simple", options) : helperMissing.call(depth0, "link-to", "emberTable.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.ajax", options) : helperMissing.call(depth0, "link-to", "emberTable.ajax", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.bars", options) : helperMissing.call(depth0, "link-to", "emberTable.bars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.dynamic-bars", options) : helperMissing.call(depth0, "link-to", "emberTable.dynamic-bars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.financial", options) : helperMissing.call(depth0, "link-to", "emberTable.financial", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.editable", options) : helperMissing.call(depth0, "link-to", "emberTable.editable", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.sparkline", options) : helperMissing.call(depth0, "link-to", "emberTable.sparkline", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.horizon", options) : helperMissing.call(depth0, "link-to", "emberTable.horizon", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.fluid", options) : helperMissing.call(depth0, "link-to", "emberTable.fluid", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        </ul>\n      </div>\n      <div class=\"col-md-3\">\n        <ul class=\"list-unstyled\">\n          <li><h6>Open Source</h6></li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.overview", options) : helperMissing.call(depth0, "link-to", "emberTable.overview", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "license", options) : helperMissing.call(depth0, "link-to", "license", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li>\n            <address>\n              <br><br>\n              <a target=\"_BLANK\" href=\"http://goo.gl/maps/446ui\"><strong>Addepar HQ</strong><br>\n              1215 Terra Bella Ave<br>\n              Mountain View, CA 94043</a><br><br>\n\n              <a target=\"_BLANK\" href=\"http://goo.gl/maps/xEiCM\"><strong>Addepar NY</strong><br>\n              335 Madison Ave Suite 880<br>\n              New York, NY 10017</a><br>\n            </address>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 center-align\">\n        <p>&copy; 2013 Addepar, Inc.</p>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("\n<nav class=\"navbar navbar-transparent addepar-navbar\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">\n      <img id=\"logo_dark\" class=\"logo\" src=\"img/addepar_logo_light.png\" /><span class=\"navbar-title\">Open Source</span>\n    </a>\n  </div>\n\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\">Ember Table</a></li>\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navigation", options) : helperMissing.call(depth0, "partial", "navigation", options))));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  return buffer;
  
});

Ember.TEMPLATES["ember_table"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"hero-container small-hero-container\">\n  <div class=\"hero table-hero\">\n    <div class=\"hero-overlay\"></div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ember_table/sub_navigation", options) : helperMissing.call(depth0, "partial", "ember_table/sub_navigation", options))));
  data.buffer.push("\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/_sub_navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Overview &amp; Getting Started");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("API &amp; Documentation");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Hello World Table");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("AJAX cells");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Bar cells");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Dynamic bar cells");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Tree &amp; financial table");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("Editable cells");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Sparkline cells");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("Horizon cells");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("Fluid table");
  }

  data.buffer.push("\n<div class=\"col-md-2 sub-navigation-sidebar\">\n  <ul class=\"list-unstyled github-navigation\">\n    <li>\n      <a class=\"btn btn-default\" target=\"_BLANK\" href=\"https://github.com/addepar/ember-table\">\n        <i class=\"icon-github\"></i> View on GitHub\n      </a>\n    </li>\n    <li>\n      <iframe src=\"http://ghbtns.com/github-btn.html?user=addepar&amp;repo=ember-table&amp;type=watch&amp;count=true\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"130\" height=\"30\"></iframe>\n    </li>\n  </ul>\n  <hr>\n  <ul class=\"list-unstyled project-navigation\">\n    <li class=\"sub-title\">Ember Table</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.overview", options) : helperMissing.call(depth0, "link-to", "emberTable.overview", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.documentation", options) : helperMissing.call(depth0, "link-to", "emberTable.documentation", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  </ul>\n  <hr>\n  <ul class=\"list-unstyled project-navigation\">\n    <li class=\"sub-title\">Examples</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.simple", options) : helperMissing.call(depth0, "link-to", "emberTable.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.ajax", options) : helperMissing.call(depth0, "link-to", "emberTable.ajax", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.bars", options) : helperMissing.call(depth0, "link-to", "emberTable.bars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.dynamic-bars", options) : helperMissing.call(depth0, "link-to", "emberTable.dynamic-bars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.financial", options) : helperMissing.call(depth0, "link-to", "emberTable.financial", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.editable", options) : helperMissing.call(depth0, "link-to", "emberTable.editable", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.sparkline", options) : helperMissing.call(depth0, "link-to", "emberTable.sparkline", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.horizon", options) : helperMissing.call(depth0, "link-to", "emberTable.horizon", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.fluid", options) : helperMissing.call(depth0, "link-to", "emberTable.fluid", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  </ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/ajax"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Ajax Cells</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'numFixedColumns': (0),
    'numRows': (100),
    'rowHeight': (35),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'numFixedColumns': "INTEGER",'numRows': "INTEGER",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'numFixedColumns': depth0,'numRows': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"example-description\">\n        <p class=\"reduced\">Ember-Table with ajax cells.</p>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n    hasHeader=true\n    hasFooter=false\n    numFixedColumns=0\n    numRows=100\n    rowHeight=35\n    columnsBinding=\"columns\"\n    contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.EmberTableAjaxLazyDataSource = Ember.ArrayProxy.extend\n  createGithubEvent: (row, event) ->\n    row.set 'type',       event.type\n    row.set 'createdAt',  event.created_at\n    row.set 'login',      event.actor.login\n    row.set 'avatar',     event.actor.avatar_url\n    row.set 'isLoaded',   yes\n\n  requestGithubEvent: (page) ->\n    content = @get 'content'\n    start   = (page - 1) * 30\n    end     = start + 30\n    url = \"https://api.github.com/repos/emberjs/ember.js/events?page=#{page}&per_page=30&callback=?\"\n    Ember.$.getJSON url, (json) =>\n      json.data.forEach (event, index) =>\n        row = content[start + index]\n        @createGithubEvent row, event\n    [start...end].forEach (index) ->\n      content[index] = Ember.Object.create eventId: index, isLoaded: no\n\n  objectAt: (index) ->\n    content = @get 'content'\n    #if index is content.get('length') - 1\n    #  content.pushObjects(new Array(30))\n    row = content[index]\n    return row if row and not row.get('error')\n    @requestGithubEvent Math.floor(index / 30 + 1)\n    content[index]\n\nApp.ApplicationController = Ember.Controller.extend\n  numRows: 100\n\n  columns: Ember.computed ->\n    avatar = Ember.Table.ColumnDefinition.create\n      columnWidth: 80\n      headerCellName: 'avatar'\n      tableCellViewClass:  'App.EmberTableAjaxImageTableCell'\n      contentPath: 'avatar'\n    columnNames = ['login', 'type', 'createdAt']\n    columns = columnNames.map (key, index) ->\n      Ember.Table.ColumnDefinition.create\n        columnWidth: 150\n        headerCellName: key.w()\n        contentPath: key\n    columns.unshift avatar\n    columns\n\n  content: Ember.computed ->\n    App.EmberTableAjaxLazyDataSource.create\n      content: new Array(@get('numRows'))\n  .property 'numRows'\n</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/ajax_table/ajax_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <img width=\"30\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.cellContent")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></img>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n  <img src=\"img/loading.gif\" style=\"padding: 8px;\"></img>\n");
  }

  stack1 = helpers['if'].call(depth0, "view.row.isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/bar_table/bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<span class=\"bar-cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("view.histogramStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n</span>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/bars"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>D3 Chart Table Cells</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'rowHeight': (30),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n    hasHeader=true\n    hasFooter=false\n    rowHeight=30\n    columnsBinding=\"columns\"\n    contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>bar_table_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;span class=&quot;bar-cell&quot; &#123;&#123;bind-attr style=&quot;view.histogramStyle&quot;&#125;&#125;&gt;&lt;/span&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>bar_table_cell_view.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.BarTableCellView = Ember.Table.TableCell.extend\n  templateName:     'ember_table/bar_table/bar'\n  classNameBindings:['column.color']\n  barWidth: Ember.computed ->\n    {column, row} = @getProperties 'column', 'row'\n    return 0 unless column and row\n    Math.round(+@get('cellContent'))\n  .property 'column', 'row', 'cellContent'\n\n  histogramStyle: Ember.computed ->\n    \"width: #{@get('barWidth')}%;\"\n  .property 'barWidth'</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.ApplicationController = Ember.Controller.extend\n  numRows: 100\n\n  columns: Ember.computed ->\n    colors  = ['blue', 'teal', 'green', 'yellow', 'orange']\n    column1 = Ember.Table.ColumnDefinition.create\n      columnWidth:    50\n      headerCellName: 'Name'\n      contentPath: 'key'\n    columns = colors.map (color, index) ->\n      Ember.Table.ColumnDefinition.create\n        color: color\n        headerCellName: 'Bar'\n        tableCellViewClass: 'App.BarTableCell'\n        contentPath: \"value#{index + 1}\"\n    columns.unshift(column1)\n    columns\n\n  content: Ember.computed ->\n    [0...@get('numRows')].map (num, index) ->\n      key: index\n      value1: Math.random() * 80 + 10\n      value2: Math.random() * 80 + 10\n      value3: Math.random() * 80 + 10\n      value4: Math.random() * 80 + 10\n      value5: Math.random() * 80 + 10\n  .property 'numRows'\n</pre>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/documentation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("here");
  }

  data.buffer.push("    \n    <div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n      <h1>Migration Guide</h1>\n      <div class=\"row\">\n        <div class=\"col-md-7\">\n          <h2>Guide</h2>\n          <p>Version 0.1 of Ember Table is a bit of a restructure - we’re hoping that the new organization will make it simpler and easier to set up, but for existing users, you’ll have to make a few changes to upgrade to the new Ember Table. This guide is intended to walk you through that process.</p>\n\n          <ol class=\"styled styled-spacious\">\n            <li>Upgrade ember-table.js and ember-table.css. If you’re not on the latest version of <a target=\"_BLANK\" href=\"http://emberjs.com/\">Ember.js</a>, now might be a good time to upgrade that as well. This guide was written using Ember 1.0.0 and Ember Table 0.1. You can grab Ember 1.0.0 <a target=\"_BLANK\" href=\"https://github.com/emberjs/starter-kit/archive/v1.0.0.zip\">here</a>.</li>\n            <li>The major change is moving from separate table Views and Controllers to a unified table Component. You can read up on Ember Components <a target=\"_BLANK\" href=\"http://emberjs.com/guides/components/\">here</a>. So instead of having lines like this:<br/><br/>\n            <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.MyTableController = Ember.Table.TableController.extend (...)\nApp.MyTableView = EmberTable.TableContainerView.extend (...)</pre>\n            </div>\n\n            You’ll have everything in one place:\n            <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.MyTableController = Ember.Controller.extend (...)</pre>\n            </div>\n\n            For starters, just change the type of your MyTableController from the old version to the new.\n            </li>\n            <li>Update your handlebars file. Before, it might have looked like:<br/>\n              <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;view Ember.Table.TablesContainer …&#125;&#125;</pre>\n              </div>\n              After the restructure, it should look like this:<br/>\n              <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component …&#125;&#125;</pre>\n              </div>\n            </li>\n            <li>While you’re modifying that handlebars file, you may want to make sure it looks like the structure of the new Ember Table examples. You can see one ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.simple", options) : helperMissing.call(depth0, "link-to", "emberTable.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(". In particular, you might get errors if you don’t properly bind your columns and content of the table, using “columnsBinding=” and “contentBinding=”.<br/><br/>\n            Both of these settings refer to variables in the corresponding controller (which here should be MyTableController), such that if you set “columnsBinding=exampleVariable”, then the columns will be bound to “exampleVariable” in the controller. This gives you control over the look and content of the table.<br/><br/>\n            Before, you may have had “controllerBinding=” here. You don’t need this any more: the controller being used with this template will be used for the table too, by default.</li>\n            <li>Move any properties you had defined in your TableContainerView (if you had one) into the controller. See the examples for more information on how table properties should be set now.</li>\n          </ol>\n        </div>\n        <div class=\"col-md-5\">\n          <h2>Troubleshooting</h2>\n          <ul class=\"styled styled-spacious\">\n            <li>If you were using old Ember Table objects like the RowArrayProxy, take another look and consider whether you really need it. During my migration I was able to remove it by changing the “contentBinding=” in my handlebars file to a more appropriate variable for content.</li>\n            <li>If you are having errors with template names not being found, it may be due to a change with inferring names. For me, my old template names used hyphens, and changing them to underscores automatically connected them to the rest of my application.</li>\n          </ul>\n        </div>\n      </div>\n\n      <hr>\n      <h1>API</h1>\n      <h2>Ember.Table.TableComponent Options</h2>\n\n      <table class=\"table ember-table-options\">\n        <tr>\n          <th style=\"width: 200px;\">Option</th>\n          <th style=\"width: 150px;\">Default</th>\n          <th>Description</th>\n        </tr>\n        <tr>\n          <td>content <b>(required)</b></td>\n          <td>null</td>\n          <td>\n            <p>\n              An array which returns row objects. Each column definition\n              must define a function which takes a row object and\n              returns the value for that cell. E.g. the row object might\n              be a hash, in which case the column definition's function\n              might simply get the value corresponding to its key. The\n              row object might be a function, in which case the column\n              definition's function might evaluate the function at a\n              given value. Etc.\n            </p>\n          </td>\n        <tr>\n          <td>columns <b>(required)</b></td>\n          <td>null</td>\n          <td>\n            <p>\n              An array of column definitions. Allows you to specify\n              column configuration - e.g. whether the column is resizable,\n              its css class, etc. (see column definition API for more\n              details)\n            </p>\n          </td>\n        </tr>\n        <tr>\n          <td>numFixedColumns</td>\n          <td>0</td>\n          <td><p>The number of frozen column on the left table.</p></td>\n        </tr>\n        <tr>\n          <td>numFooterRow</td>\n          <td>0</td>\n          <td><p>The number of footer rows in the table.</p></td>\n        </tr>\n        <tr>\n          <td>rowHeight</td>\n          <td>30</td>\n          <td><p>The row height, which is necessary to calculate the height for the lazy rendering.</p></td>\n        </tr>\n        <tr>\n          <td>minHeaderHeight</td>\n          <td>30</td>\n          <td><p>The minimum header height in pixels.</p></td>\n        </tr>\n        <tr>\n          <td>footerHeight</td>\n          <td>30</td>\n          <td><p>The minimum footer height in pixels.</p></td>\n        </tr>\n        <tr>\n          <td>hasHeader</td>\n          <td>true</td>\n          <td><p>Shows the header block.</p></td>\n        </tr>\n        <tr>\n          <td>hasFooter</td>\n          <td>true</td>\n          <td><p>Shows a the footer block.</p></td>\n        </tr>\n        <tr>\n          <td>forceFillColumns</td>\n          <td>false</td>\n          <td><p>Expands the columns to fill the given width.</p></td>\n        </tr>\n        <tr>\n          <td>enableColumnReorder</td>\n          <td>true</td>\n          <td><p>Allows the user the reorder the columns to their liking.</p></td>\n        </tr>\n        <tr>\n          <td>enableContentSelection</td>\n          <td>false</td>\n          <td><p>Allows the user to select a table cell text content.</p></td>\n        </tr>\n      </table>\n\n      <h2>Ember.Table.ColumnDefinition Options</h2>\n      <table class=\"table ember-table-options\">\n        <tr>\n          <th style=\"width: 200px;\">Option</th>\n          <th style=\"width: 150px;\">Default</th>\n          <th>Description</th>\n        </tr>\n        <tr>\n          <td>headerCellName</td>\n          <td>undefined</td>\n          <td><p>Text that appears in the column header.</p></td>\n        </tr>\n        <tr>\n          <td>contentPath</td>\n          <td>undefined</td>\n          <td><p>Path of the content for a cell. Given a row, this is the\n            path of the value that is extracted from that row.</p></td>\n        </tr>\n        <tr>\n          <td>minWidth</td>\n          <td>undefined</td>\n          <td><p>Minimum width of the column.</p></td>\n        </tr>\n        <tr>\n          <td>maxWidth</td>\n          <td>undefined</td>\n          <td><p>Maximum width of the column.</p></td>\n        </tr>\n        <tr>\n          <td>defaultColumnWidth</td>\n          <td>150</td>\n          <td><p>The width of the column, by default (in pixels).</p></td>\n        </tr>\n        <tr>\n          <td>isResizable</td>\n          <td>yes</td>\n          <td><p>If yes then the column can be resized, otherwise it\n            cannot.</p></td>\n        </tr>\n        <tr>\n          <td>isSortable</td>\n          <td>yes</td>\n          <td><p>If yes then the column can be sorted.</p></td>\n        </tr>\n        <tr>\n          <td>textAlign</td>\n          <td>'text-align-right'</td>\n          <td><p>Aligns text left/center/right in the column.</p></td>\n        </tr>\n        <tr>\n          <td>canAutoResize</td>\n          <td>yes</td>\n          <td><p>If yes then column will automatically resized to be\n            larger when there is additional space for the table.</p></td>\n        </tr>\n      </table>\n\n      <h2>Ember.Table.TableCell Options</h2>\n      <table class=\"table ember-table-options\">\n        <tr>\n          <th style=\"width: 200px;\">Option</th>\n          <th style=\"width: 150px;\">Default</th>\n          <th>Description</th>\n        </tr>\n        <tr>\n          <td>templateName</td>\n          <td>'table-cell'</td>\n          <td><p>The name of the template to be rendered into the cell.\n            Used for rendering custom templates<p></td>\n        </tr>\n        <tr>\n          <td>classNames</td>\n          <td>['ember-table-cell']</td>\n          <td><p>The class names applied to the cell. Override to give\n            the cell custom styling (border, background color, etc.)<p></td>\n        </tr>\n        <tr>\n          <td>classNameBindings</td>\n          <td>'column.textAlign'</td>\n          <td><p>A binding used to dynamically associate class names\n            with this table cell. E.g. you can bind to a column property\n            to have cell colors or styles vary across columns.<p></td>\n        </tr>\n        <tr>\n          <td>styleBindings</td>\n          <td>'width'</td>\n          <td><p>Values which are bound to the cell's style attr. See\n            Ember.STyleBindingsMixin documentation for more details.<p></td>\n        </tr>\n      </table>\n\n      <h2>Ember.Table.HeaderCell Options</h2>\n      <table class=\"table ember-table-options\">\n        <tr>\n          <th style=\"width: 200px;\">Option</th>\n          <th style=\"width: 150px;\">Default</th>\n          <th>Description</th>\n        </tr>\n        <tr>\n          <td>templateName</td>\n          <td>'table-cell'</td>\n          <td><p>The name of the template to be rendered into the cell.\n            Used for rendering custom templates<p></td>\n        </tr>\n        <tr>\n          <td>classNames</td>\n          <td>['ember-table-cell']</td>\n          <td><p>The class names applied to the cell. Override to give\n            the cell custom styling (border, background color, etc.)<p></td>\n        </tr>\n        <tr>\n          <td>classNameBindings</td>\n          <td>'column.textAlign'</td>\n          <td><p>A binding used to dynamically associate class names\n            with this table cell. E.g. you can bind to a column property\n            to have cell colors or styles vary across columns.<p></td>\n        </tr>\n        <tr>\n          <td>styleBindings</td>\n          <td>'width'</td>\n          <td><p>Values which are bound to the cell's style attr. See\n            Ember.STyleBindingsMixin documentation for more details.<p></td>\n      </table>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/dynamic-bars"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Dynamic Bar</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'rowHeight': (30),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n  hasFooter=false\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>bar_table_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;span class=&quot;bar-cell&quot; &#123;&#123;bind-attr style=&quot;view.histogramStyle&quot;&#125;&#125;&gt;&lt;/span&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>bar_table_cell_view.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.BarTableCellView = Ember.Table.TableCell.extend\n  templateName:     'ember_table/bar_table/bar'\n  classNameBindings:['column.color']\n  barWidth: Ember.computed ->\n    {column, row} = @getProperties 'column', 'row'\n    return 0 unless column and row\n    Math.round(+@get('cellContent'))\n  .property 'column', 'row', 'cellContent'\n\n  histogramStyle: Ember.computed ->\n    \"width: #{@get('barWidth')}%;\"\n  .property 'barWidth'</pre>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.ApplicationController = Ember.Controller.extend\n  numRows: 100\n\n  getNextValue: (current) ->\n    current = current + (Math.random() * 10 - 5)\n    current = Math.min(100, current)\n    current = Math.max(0, current)\n    current\n\n  init: ->\n    setInterval =>\n      @get('content').forEach (item) =>\n        item.set 'value1', @getNextValue(item.get('value1'))\n        item.set 'value2', @getNextValue(item.get('value2'))\n        item.set 'value3', @getNextValue(item.get('value3'))\n        item.set 'value4', @getNextValue(item.get('value4'))\n        item.set 'value5', @getNextValue(item.get('value5'))\n    , 1500\n\n  columns: Ember.computed ->\n    colors  = ['blue', 'teal', 'green', 'yellow', 'orange']\n    column1 = Ember.Table.ColumnDefinition.create\n      columnWidth:    50\n      headerCellName: 'Name'\n      contentPath: 'key'\n    columns = colors.map (color, index) ->\n      Ember.Table.ColumnDefinition.create\n        color: color\n        headerCellName: 'Bar'\n        tableCellViewClass: 'App.BarTableCell'\n        contentPath: \"value#{index + 1}\"\n    columns.unshift(column1)\n    columns\n\n  content: Ember.computed ->\n    [0...@get('numRows')].map (num, index) ->\n      Ember.Object.create\n        key: index\n        value1: Math.random() * 80 + 10\n        value2: Math.random() * 80 + 10\n        value3: Math.random() * 80 + 10\n        value4: Math.random() * 80 + 10\n        value5: Math.random() * 80 + 10\n  .property 'numRows'</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/editable"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Editable</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'numFixedColumns': (0),
    'rowHeight': (30),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'numFixedColumns': "INTEGER",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'numFixedColumns': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n  hasHeader=true\n  hasFooter=false\n  numFixedColumns=0\n  rowHeight=35\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>editable_table_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;span class=&quot;ember-table-content&quot;&gt;<br/>  &#123;&#123;#if view.isEditing&#125;&#125;<br/>    &#123;&#123;view view.innerTextField&#125;&#125;<br/>  &#123;&#123;else&#125;&#125;<br/>    &lt;span class='content'&gt;&#123;&#123;view.cellContent&#125;&#125;&lt;/span&gt;<br/>  &#123;&#123;/if&#125;&#125;<br/>&lt;/span&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>rating_table_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;div class=&quot;rating&quot;&gt;<br/>  &lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;<br/>&lt;/div&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>editable_table_cell_views.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.EditableTableCell = Ember.Table.TableCell.extend\n  className: 'editable-table-cell'\n  templateName: 'ember_table/editable_table/editable_table_cell'\n  isEditing:  no\n  type:       'text'\n\n  innerTextField: Ember.TextField.extend\n    typeBinding:  'parentView.type'\n    valueBinding: 'parentView.cellContent'\n    didInsertElement: -> @$().focus()\n    focusOut: (event) -> @set 'parentView.isEditing', no\n\n  onRowContentDidChange: Ember.observer ->\n    @set 'isEditing', no\n  , 'rowContent'\n\n  click: (event) ->\n    @set 'isEditing', yes\n    event.stopPropagation()\n\nApp.DatePickerTableCell = App.EditableTableCell.extend\n  type: 'date'\n\nApp.RatingTableCell = Ember.Table.TableCell.extend\n  classNames: 'rating-table-cell'\n  templateName: 'ember_table/editable_table/rating_table_cell'\n\n  onRowContentDidChange: Ember.observer ->\n    @applyRating @get('cellContent')\n  , 'cellContent'\n\n  didInsertElement: ->\n    @_super()\n    @onRowContentDidChange()\n\n  applyRating: (rating) ->\n    @$('.rating span').removeClass('active')\n    span   = @$('.rating span').get(rating)\n    $(span).addClass('active')\n\n  click: (event) ->\n    rating = @$('.rating span').index(event.target)\n    return if rating is -1\n    @get('column').setCellContent(@get('rowContent'), rating)\n    @applyRating(rating)\n</pre>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.EmberTableEditableController = Ember.Controller.extend\n  numRows: 100\n  columns: Ember.computed ->\n    columnNames = ['open', 'close']\n    dateColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Date'\n      tableCellViewClass: 'App.DatePickerTableCell'\n      getCellContent: (row) -> row['date'].toString('yyyy-MM-dd')\n      setCellContent: (row, value) -> row['date'] = value\n    ratingColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 150\n      headerCellName: 'Analyst Rating'\n      tableCellViewClass: 'App.RatingTableCell'\n      contentPath: 'rating'\n      setCellContent: (row, value) -> row['rating'] = value\n    columns= columnNames.map (key, index) ->\n      name = key.charAt(0).toUpperCase() + key.slice(1)\n      Ember.Table.ColumnDefinition.create\n        columnWidth: 100\n        headerCellName: name\n        tableCellViewClass: 'App.EditableTableCell'\n        getCellContent: (row) -> row[key].toFixed(2)\n        setCellContent: (row, value) -> row[key] = +value\n    columns.unshift(ratingColumn)\n    columns.unshift(dateColumn)\n    columns\n  .property()\n\n  content: Ember.computed ->\n    [0...@get('numRows')].map (num, idx) ->\n      index: idx\n      date:  Date.now().add(days: idx)\n      open:  Math.random() * 100 - 50\n      close: Math.random() * 100 - 50\n      rating:Math.round(Math.random() * 4)\n  .property 'numRows'</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/editable_table/editable_table_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.innerTextField", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class='content'>");
  stack1 = helpers._triageMustache.call(depth0, "view.cellContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  ");
  return buffer;
  }

  data.buffer.push("<span class=\"ember-table-content\">\n  ");
  stack1 = helpers['if'].call(depth0, "view.isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</span>");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/editable_table/rating_table_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"rating\">\n  <span></span><span></span><span></span><span></span><span></span>\n</div>");
  
});

Ember.TEMPLATES["ember_table/financial"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Financial Table</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container ember-table-financial\">\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FinancialTableComponent", {hash:{
    'dataBinding': ("data")
  },hashTypes:{'dataBinding': "STRING"},hashContexts:{'dataBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"example-description\">\n        <p class=\"reduced\">Ember-Table with financial theme.</p>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n  hasHeader=true\n  hasFooter=false\n  numFixedColumns=0\n  rowHeight=35\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;div class=&quot;ember-table-cell-container&quot;&gt;<br/>  &lt;span class=&quot;ember-table-content&quot;&gt;<br/>    &#123;&#123;view.cellContent&#125;&#125;<br/>  &lt;/span&gt;<br/>&lt;/div&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_tree_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;div class=&quot;ember-table-cell-container&quot; &#123;&#123;bind-attr style=&quot;view.paddingStyle&quot;&#125;&#125;&gt;<br/>  &lt;span &#123;&#123;bind-attr class=&quot;:ember-table-toggle-span view.row.isLeaf::ember-table-toggle<br/>    view.row.isCollapsed:ember-table-expand:ember-table-collapse&quot;&#125;&#125;<br/>    &#123;&#123;action toggleCollapse view.row&#125;&#125;&gt;<br/>    &lt;i class=&quot;icon-caret-down ember-table-toggle-icon&quot;&gt;&lt;/i&gt;<br/>  &lt;/span&gt;<br/>  &lt;span class=&quot;ember-table-content&quot;&gt;<br/>    &#123;&#123;view.cellContent&#125;&#125;<br/>  &lt;/span&gt;<br/>&lt;/div&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_header_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;div class=&quot;ember-table-cell-container&quot;&gt;<br/>  &lt;div class=&quot;ember-table-header-content-container&quot;&gt;<br/>    &lt;span class=&quot;ember-table-content&quot;&gt;<br/>      &#123;&#123;view.content.headerCellName&#125;&#125;<br/>    &lt;/span&gt;<br/>  &lt;/div&gt;<br/>&lt;/div&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_header_tree_cell.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&lt;div class=&quot;ember-table-cell-container&quot;&gt;<br/>  &lt;span &#123;&#123;bind-attr class=&quot;:ember-table-toggle-span :ember-table-toggle<br/>      isCollapsed:ember-table-expand:ember-table-collapse&quot;&#125;&#125;<br/>      &#123;&#123;action toggleTableCollapse&#125;&#125;&gt;<br/>    &lt;i class=&quot;icon-caret-down ember-table-toggle-icon&quot;&gt;&lt;/i&gt;<br/>  &lt;/span&gt;<br/>  &lt;div class=&quot;ember-table-header-content-container&quot;&gt;<br/>    &lt;span class=&quot;ember-table-content&quot;&gt;<br/>      &#123;&#123;view.column.headerCellName&#125;&#125;<br/>    &lt;/span&gt;<br/>  &lt;/div&gt;<br/>&lt;/div&gt;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_cell_views.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.FinancialTableCell = Ember.Table.TableCell.extend\n  templateName: 'ember_table/financial_table/financial_table_cell'\n\nApp.FinancialTableHeaderCell = Ember.Table.HeaderCell.extend\n  templateName: 'ember_table/financial_table/financial_table_header_cell'\n\nApp.FinancialTableTreeCell = Ember.Table.TableCell.extend\n  templateName: 'ember_table/financial_table/financial_table_tree_cell'\n  classNames:   'ember-table-table-tree-cell'\n  paddingStyle: Ember.computed ->\n    \"padding-left:#{@get('row.indentation')}px;\"\n  .property 'row.indentation'\n\nApp.FinancialTableHeaderTreeCell = Ember.Table.HeaderCell.extend\n  templateName: 'ember_table/financial_table/financial_table_header_tree_cell'\n  classNames:   'ember-table-table-header-tree-cell'\n</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_row.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.FinancialTableTreeTableRow = Ember.Table.Row.extend\n  content:  null\n  children: null\n  parent:   null\n  isRoot:   no\n  isLeaf:   no\n  isCollapsed: no\n  isShowing: yes\n  indentationSpacing: 20\n  groupName: null\n\n  # This may look ugly, but this is necessary. By doing the styles computation\n  # imperatively we made the initial table load 10-100x faster (certain cases)\n  computeStyles: (parent) ->\n    groupingLevel = 0\n    indentation   = 0\n    isShowing     = yes\n    if parent\n      isShowing = parent.get('isShowing') and not parent.get('isCollapsed')\n      pGroupingLevel = parent.get 'groupingLevel'\n      groupingLevel  = pGroupingLevel\n      groupingLevel  += 1 if parent.get('groupName') isnt @get('groupName')\n      indentType = if groupingLevel is pGroupingLevel then 'half' else 'full'\n      spacing    = @get 'indentationSpacing'\n      if not parent.get('isRoot')\n        indentation = parent.get('indentation')\n        indentation += (if indentType is 'half' then spacing / 2 else spacing)\n    @set 'groupingLevel', groupingLevel\n    @set 'indentation', indentation\n    @set 'isShowing', isShowing\n\n  computeRowStyle: (maxLevels) ->\n    level = @getFormattingLevel @get('groupingLevel'), maxLevels\n    @set 'rowStyle', \"ember-table-row-style-#{level}\"\n\n  recursiveCollapse: (isCollapsed) ->\n    @set 'isCollapsed', isCollapsed\n    @get('children').forEach (child) ->\n      child.recursiveCollapse isCollapsed\n\n  getFormattingLevel: (level, maxLevels) ->\n    switch maxLevels\n      when 1 then return 5\n      when 2\n        return 2 if level is 1\n        return 5\n      when 3\n        return 1 if level is 1\n        return 3 if level is 2\n        return 5\n      when 4\n        return 1 if level is 1\n        return 2 if level is 2\n        return 4 if level is 4\n        return 5\n      when 5\n        return level\n      else\n        return 5 if level is maxLevels\n        return Math.min(level, 4)</pre>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>financial_table_component.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.FinancialTableComponent = Ember.Table.EmberTableComponent.extend\n  # overridding default properties\n  numFixedColumns: 1\n  isCollapsed: no\n  isHeaderHeightResizable: yes\n  rowHeight: 30\n  hasHeader: yes\n  hasFooter: yes\n  headerHeight: 70\n\n  # custom properties\n  sortAscending: no\n  sortColumn: null\n  selection: null\n\n  actions:\n    toggleTableCollapse: (event) ->\n      @toggleProperty 'isCollapsed'\n      isCollapsed = @get 'isCollapsed'\n      children = @get('root.children')\n      return unless children and children.get('length') > 0\n      children.forEach (child) -> child.recursiveCollapse isCollapsed\n      @notifyPropertyChange 'rows'\n\n    toggleCollapse: (row) ->\n      row.toggleProperty 'isCollapsed'\n      Ember.run.next this, -> @notifyPropertyChange 'rows'\n\n  ##############################################################################\n  # Data Conversions\n  ##############################################################################\n  data: null\n\n  columns: Ember.computed ->\n    data = @get 'data'\n    return unless data\n    names = @get('data.value_factors').getEach('display_name')\n    columns = names.map (name, index) ->\n      Ember.Table.ColumnDefinition.create\n        index: index\n        headerCellName: name\n        headerCellViewClass:  'App.FinancialTableHeaderCell'\n        tableCellViewClass:   'App.FinancialTableCell'\n        getCellContent: (row) ->\n          object = row.values[@get('index')]\n          return object.value.toCurrency() if object.type is 'money'\n          return object.value.toPercent()  if object.type is 'percent'\n          \"-\"\n    columns.unshiftObject @get('groupingColumn')\n    columns\n  .property 'data.valueFactors.@each', 'groupingColumn'\n\n  groupingColumn: Ember.computed ->\n    groupingFactors = @get 'data.grouping_factors'\n    name = groupingFactors.getEach('display_name').join ' ▸ '\n    Ember.Table.ColumnDefinition.create\n      headerCellName: name\n      columnWidth: 400\n      isTreeColumn: yes\n      isSortable: no\n      textAlign: 'text-align-left'\n      headerCellViewClass:  'App.FinancialTableHeaderTreeCell'\n      tableCellViewClass:   'App.FinancialTableTreeCell'\n      contentPath: 'group_value'\n  .property 'data.grouping_factors.@each'\n\n  root: Ember.computed ->\n    data = @get 'data'\n    return unless data\n    @createTree(null, data.root)\n  .property 'data', 'sortAscending', 'sortColumn'\n\n  rows: Ember.computed ->\n    root = @get 'root'\n    return Ember.A() unless root\n    rows = @flattenTree null, root, Ember.A()\n    @computeStyles null, root\n    maxGroupingLevel = Math.max.apply rows.getEach('groupingLevel')\n    rows.forEach (row) -> row.computeRowStyle(maxGroupingLevel)\n    rows\n  .property 'root'\n\n  # OPTIMIZATION HACK\n  bodyContent: Ember.computed ->\n    rows = @get('rows')\n    return Ember.A() unless rows\n    rows = rows.slice(1, rows.get('length'))\n    rows.filterProperty('isShowing')\n  .property 'rows'\n\n  footerContent: Ember.computed ->\n    rows = @get('rows')\n    return Ember.A() unless rows\n    rows.slice(0, 1)\n  .property 'rows'\n\n  orderBy: (item1, item2) ->\n    sortColumn = @get 'sortColumn'\n    sortAscending = @get 'sortAscending'\n    return 1 unless sortColumn\n    value1 = sortColumn.getCellContent item1.get('content')\n    value2 = sortColumn.getCellContent item2.get('content')\n    result = Ember.compare value1, value2\n    if sortAscending then result else -result\n\n  createTree: (parent, node) ->\n    row = App.FinancialTableTreeTableRow.create()\n    children = (node.children || []).map (child) =>\n      @createTree row, child\n    # TODO(Peter): Hack... only collapse table if it should collapseByDefault\n    # and it is not the root. Currently the total row is the root, and if it\n    # is collapse, it causes nothing to show in the table and there is no way\n    # to get expand it.\n    row.setProperties\n      isRoot:     not parent\n      isLeaf:     Ember.isEmpty(children)\n      content:    node\n      parent:     parent\n      children:   children\n      groupName:  node.group_name\n      isCollapsed:no\n    row\n\n  flattenTree: (parent, node, rows) ->\n    rows.pushObject node\n    (node.children || []).forEach (child) =>\n      @flattenTree node, child, rows\n    rows\n\n  computeStyles: (parent, node) ->\n    node.computeStyles parent\n    node.get('children').forEach (child) =>\n      @computeStyles node, child</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/financial_table/financial_table_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"ember-table-cell-container\">\n  <span class=\"ember-table-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.cellContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/financial_table/financial_table_header_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"ember-table-cell-container\">\n  <div class=\"ember-table-header-content-container\">\n    <span class=\"ember-table-content\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.headerCellName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/financial_table/financial_table_header_tree_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-cell-container\">\n  <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ember-table-toggle-span :ember-table-toggle\n      isCollapsed:ember-table-expand:ember-table-collapse")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleTableCollapse", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"icon-caret-down ember-table-toggle-icon\"></i>\n  </span>\n  <div class=\"ember-table-header-content-container\">\n    <span class=\"ember-table-content\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "view.column.headerCellName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/financial_table/financial_table_tree_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-cell-container\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("view.paddingStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ember-table-toggle-span view.row.isLeaf::ember-table-toggle\n    view.row.isCollapsed:ember-table-expand:ember-table-collapse")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCollapse", "view.row", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n    <i class=\"icon-caret-down ember-table-toggle-icon\"></i>\n  </span>\n  <span class=\"ember-table-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.cellContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/fluid"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Fluid</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FluidTable", {hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'numFixedColumns': (0),
    'rowHeight': (30),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'numFixedColumns': "INTEGER",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'numFixedColumns': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;view App.FluidTable\n  hasHeader=true\n  hasFooter=false\n  numFixedColumns=0\n  rowHeight=30\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>fluid_table.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.FluidTable = Ember.Table.EmberTableComponent.extend\n  # actual width of the table columns (non-frozen columns)\n  _tableColumnsWidth: \"100%\"\n\n  prepareTableColumns: (columns) ->\n    @_super(columns)\n    # Some maintenance on the columns for percent resizing\n    for col, i in columns\n      col.set(\"_nextColumn\", columns.objectAt(i + 1))\n\nApp.FluidColumnDefinition = Ember.Table.ColumnDefinition.extend\n  isResizable: Ember.computed ->\n    if @get('_nextColumn') then yes else no\n  .property '_nextColumn'\n\n  resize: (pxWidth, tableWidth)->\n    newMaxWidth = null\n    tableWidth = tableWidth || @get(\"controller._tableContainerWidth\")\n    return unless tableWidth\n\n    percent = (val)->\n      if \"string\" is typeof val\n        +(val.replace(\"%\", \"\"))\n      else\n        val * 100 / tableWidth\n\n    # either from a tabel resize or a column resize\n    oldWidth = percent(@get(\"columnWidth\"))\n    newWidth = if 'number' is typeof pxWidth then percent(pxWidth) else oldWidth\n\n    # calculate the pixel change for\n    nextCol = @get(\"_nextColumn\")\n    if nextCol\n      # calculate new and old percent width\n      diff = oldWidth - newWidth + percent(nextCol.get(\"columnWidth\"))\n      nextCol.set \"columnWidth\", diff/100*tableWidth\n      newMaxWidth = (newWidth + diff)/100*tableWidth - 100\n\n    @set \"columnWidth\", newWidth/100*tableWidth\n    @notifyPropertyChange(\"columnWidth\")\n    newMaxWidth\n\n  _convertColumnToWidth: Ember.beforeObserver ->\n    tableWidth = @get( \"controller._tableContainerWidth\" )\n    @set(\"columnWidth\", @get(\"columnWidth\")/tableWidth*100 + \"%\") if tableWidth\n  , \"controller._tableContainerWidth\"\n\n  _resizeToTable: Ember.observer ->\n    @resize()\n  , \"controller._tableContainerWidth\"\n</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.ApplicationController = Ember.Controller.extend\n  numRows: 100\n\n  columns: Ember.computed ->\n    dateColumn = App.FluidColumnDefinition.create\n      columnWidth: \"40\"\n      headerCellName: 'Date'\n      getCellContent: (row) -> row['date'].toDateString();\n    openColumn = App.FluidColumnDefinition.create\n      columnWidth: \"15\"\n      headerCellName: 'Open'\n      getCellContent: (row) -> row['open'].toFixed(2)\n    highColumn = App.FluidColumnDefinition.create\n      columnWidth: \"15\"\n      headerCellName: 'High'\n      getCellContent: (row) -> row['high'].toFixed(2)\n    lowColumn = App.FluidColumnDefinition.create\n      columnWidth: \"15\"\n      headerCellName: 'Low'\n      getCellContent: (row) -> row['low'].toFixed(2)\n    closeColumn = App.FluidColumnDefinition.create\n      columnWidth: \"15\"\n      headerCellName: 'Close'\n      getCellContent: (row) -> row['close'].toFixed(2)\n    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]\n\n  content: Ember.computed ->\n    [0...@get('numRows')].map (index) ->\n      date = new Date()\n      date.setDate(date.getDate() + index)\n      date:  date\n      open:  Math.random() * 100 - 50\n      high:  Math.random() * 100 - 50\n      low:   Math.random() * 100 - 50\n      close: Math.random() * 100 - 50\n      volume: Math.random() * 1000000\n  .property 'numRows'</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/horizon"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Horizon</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'numFixedColumns': (0),
    'rowHeight': (30),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'numFixedColumns': "INTEGER",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'numFixedColumns': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n  hasFooter=false\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>spark_line_table_cell_view.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.HorizonTableCellView = Ember.Table.TableCell.extend\n  template: Ember.Handlebars.compile(\"\")\n  heightBinding: 'controller.rowHeight'\n  horizonContent: Ember.computed ->\n    normal = d3.random.normal(1.5, 3)\n    [0...100].map (i) -> [i, normal()]\n  .property()\n  onWidthDidChange: Ember.observer ->\n    @$('svg').remove()\n    @renderD3View()\n  , 'width'\n  didInsertElement: ->\n    @onWidthDidChange()\n  renderD3View: ->\n    width  = @get 'width'\n    height = @get('height')\n    data   = @get('horizonContent')\n    chart = d3.horizon()\n      .width(width)\n      .height(height)\n      .bands(2)\n      .mode(\"mirror\")\n      .interpolate(\"basis\");\n    svg = d3.select('#' + @get('elementId')).append(\"svg\")\n      .attr(\"width\", width)\n      .attr(\"height\", height)\n    svg.data([data]).call(chart)</pre>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.ApplicationController = Ember.Controller.extend\n  numRows: 100\n\n  columns: Ember.computed ->\n    name = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Name'\n      getCellContent: (row) -> 'Horizon ' + row['name']\n    horizon = Ember.Table.ColumnDefinition.create\n      columnWidth: 600\n      headerCellName: 'Horizon'\n      tableCellViewClass: 'App.HorizonTableCellView'\n      getCellContent: Ember.K\n    [name, horizon]\n\n  content: Ember.computed ->\n    normal = d3.random.normal(1.5, 3)\n    [0...@get('numRows')].map (num, index) ->\n      data = [0...100].map (i) -> [i, normal()]\n      name: index\n      data: data\n   .property 'numRows'</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/overview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Hello World Table</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_simple.png\" />\n          </div>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>AJAX cells</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_ajax.png\" />\n          </div>\n        ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Bar cells</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_bars.png\" />\n          </div>\n        ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Dynamic bar cells</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_dynamic_bars.png\" />\n          </div>\n        ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Tree & financial table</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_financial.png\" />\n          </div>\n        ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Editable cell</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_editable.png\" />\n          </div>\n        ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Sparkline cell using D3.js</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_sparkline.png\" />\n          </div>\n        ");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Horizon cell using D3.js</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_horizon.png\" />\n          </div>\n        ");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"col-md-4\">\n            <h4>Fluid table</h4>\n            <img class=\"preview-box\" src=\"/gh_pages/img/preview_table_simple.png\" />\n          </div>\n        ");
  }

  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Ember Table</h1>\n      <p class=\"elevated\">Ember table allows you to render very\n      large data sets by only rendering the rows that are being\n      displayed.<br />It is written as an ember component with an API that is\n      easy to understand and extend.</p>\n\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container ember-table-financial\">\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FinancialTableComponent", {hash:{
    'dataBinding': ("data")
  },hashTypes:{'dataBinding': "STRING"},hashContexts:{'dataBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"example-description\">\n        <p class=\"reduced right-align\">Ember-Table with financial theme. Table with half a million rows. <a href=\"#\">Read more →</a></p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h3>Features</h3>\n      <ul class=\"styled\">\n        <li>Lazy rendering and support for millions of rows</li>\n        <li>Support for column resizing and reordering</li>\n        <li>Fully configurable, customizable, and extendable</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <h3>Dependencies</h3>\n      <ul class=\"styled\">\n        <li><a target=\"_BLANK\" href=\"http://emberjs.com/\">Ember.js</a></li>\n        <li><a target=\"_BLANK\" href=\"http://jqueryui.com/download/#!components=1110001010000000000000000000000000\">\n          jquery-ui\n          <br>\n          <small>only core, widget, mouse, resizable, and sortable modules required</small>\n        </a></li>\n        <li><a target=\"_BLANK\" href=\"https://github.com/brandonaaron/jquery-mousewheel\">jquery.mousewheel.js</a></li>\n        <li><a target=\"_BLANK\" href=\"https://github.com/LearnBoost/antiscroll\">antiscroll.js</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <hr>\n      <h1>Examples</h1>\n      <p class=\"elevated\">The examples below demonstrate how you can extend and customize the table.</p>\n      <div class=\"row ember-table-examples\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.simple", options) : helperMissing.call(depth0, "link-to", "emberTable.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.ajax", options) : helperMissing.call(depth0, "link-to", "emberTable.ajax", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.bars", options) : helperMissing.call(depth0, "link-to", "emberTable.bars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.dynamic-bars", options) : helperMissing.call(depth0, "link-to", "emberTable.dynamic-bars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.financial", options) : helperMissing.call(depth0, "link-to", "emberTable.financial", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.editable", options) : helperMissing.call(depth0, "link-to", "emberTable.editable", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.sparkline", options) : helperMissing.call(depth0, "link-to", "emberTable.sparkline", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.horizon", options) : helperMissing.call(depth0, "link-to", "emberTable.horizon", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "emberTable.fluid", options) : helperMissing.call(depth0, "link-to", "emberTable.fluid", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <hr>\n      <h1>Getting Started</h1>\n      <p>You will need <a target=\"_BLANK\" href=\"http://nodejs.org/\">node</a> installed as a development dependency.</p>\n      <p><a href=\"https://github.com/Addepar/ember-table/\">Clone it from Github</a> or <a href=\"https://github.com/Addepar/ember-table/zipball/master\">download the ZIP repo<a><p>\n      <div class=\"highlight\">\n<pre><code>$ npm install -g grunt-cli\n$ npm install\n$ grunt\n$ node examples.js</code></pre>\n      <p>Go to your browser and navigate to localhost:8000/gh_pages</p>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <hr>\n      <h1>Changelog</h1>\n      <ul class=\"styled\">\n        <li>v0.1 - October 21, 2013. Branch: <a target=\"_BLANK\" href=\"https://github.com/Addepar/ember-table/tree/master\">master →</a></li>\n        <li>v0.0.1 - December 20, 2012. Branch: <a target=\"_BLANK\" href=\"https://github.com/Addepar/ember-table/tree/version-0.1\">version-0.1 →</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <hr>\n      <h1>Contributing</h1>\n      <p>You can contribute to this project in one of two ways:\n      <ul class=\"styled\">\n        <li>Browse the ember-table <a target=\"_BLANK\" href=\"https://github.com/Addepar/ember-table/issues?state=open\">issues</a> and report bugs</li>\n        <li>Clone the ember-table repo, make some changes according to our development guidelines and issue a pull-request with your changes.</li>\n      </ul>\n      <p>We keep the ember-table.js code to the minimum necessary, giving users as much control as possible.</p>\n    </div>\n    <div class=\"col-md-6\">\n      <hr>\n      <h1>Acknowledgements</h1>\n      <p><a target=\"_BLANK\" href=\"https://github.com/Addepar/ember-table/graphs/contributors\">List of Contributors on Github</a></p>\n      <p>With lots of help from the Ember.js team</p>\n      <p><a target=\"_BLANK\" href=\"https://twitter.com/ebryn\">ebryn</a>, <a target=\"_BLANK\" href=\"https://twitter.com/tomdale\">tomdale</a>, <a target=\"_BLANK\" href=\"https://twitter.com/wycats\">wycats</a></p>\n      <p>The original idea for lazy rendering was inspired by Erik Bryn.</p>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/simple"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Simple</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasFooter': (false),
    'enableContentSelection': (true),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasFooter': "BOOLEAN",'enableContentSelection': "BOOLEAN",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasFooter': depth0,'enableContentSelection': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n  hasFooter=false\n  enableContentSelection=true\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.ApplicationController = Ember.Controller.extend\n  numRows: 100\n\n  columns: Ember.computed ->\n    dateColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 150\n      textAlign: 'text-align-left'\n      headerCellName: 'Date'\n      getCellContent: (row) -> row['date'].toDateString();\n    openColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Open'\n      getCellContent: (row) -> row['open'].toFixed(2)\n    highColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'High'\n      getCellContent: (row) -> row['high'].toFixed(2)\n    lowColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Low'\n      getCellContent: (row) -> row['low'].toFixed(2)\n    closeColumn = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Close'\n      getCellContent: (row) -> row['close'].toFixed(2)\n    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]\n\n  content: Ember.computed ->\n    [0...@get('numRows')].map (index) ->\n      date = new Date()\n      date.setDate(date.getDate() + index)\n      date:  date\n      open:  Math.random() * 100 - 50\n      high:  Math.random() * 100 - 50\n      low:   Math.random() * 100 - 50\n      close: Math.random() * 100 - 50\n      volume: Math.random() * 1000000\n  .property 'numRows'</pre>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/sparkline"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-md-10 col-md-offset-2 left-border main-content-container\">\n  <h1>Ember Table <small>Sparkline</small></h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container\">\n        <div class=\"ember-table-example-container\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasHeader': (true),
    'hasFooter': (false),
    'numFixedColumns': (1),
    'rowHeight': (30),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasHeader': "BOOLEAN",'hasFooter': "BOOLEAN",'numFixedColumns': "INTEGER",'rowHeight': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasHeader': depth0,'hasFooter': depth0,'numFixedColumns': depth0,'rowHeight': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application.hbs</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-html\">&#123;&#123;table-component\n  hasFooter=false\n  columnsBinding=\"columns\"\n  contentBinding=\"content\"\n&#125;&#125;</pre>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>spark_line_table_cell_view.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.SparkLineTableCellView = Ember.Table.TableCell.extend\n  template: Ember.Handlebars.compile(\"\")\n  heightBinding: 'controller.rowHeight'\n\n  onContentOrSizeDidChange: Ember.observer ->\n    @$('svg').remove()\n    @renderD3View()\n  , 'row', 'width'\n\n  didInsertElement: -> @renderD3View()\n\n  renderD3View: ->\n    data  = @get 'row.timeseries'\n    return unless data\n    h     = @get 'height'\n    w     = @get 'width'\n    p     = 2\n    min   = Math.min.apply(null, data)\n    max   = Math.max.apply(null, data)\n    len   = data.length\n    fill  = d3.scale.category10()\n    xscale= d3.scale.linear().domain([0, len]).range([p, w - p])\n    yscale= d3.scale.linear().domain([min, max]).range([h - p, p])\n    line  = d3.svg.line().x((d, i) -> xscale(i)).y((d) -> yscale(d))\n    svg   = d3.select(\"##{@get('elementId')}\")\n              .append('svg:svg').attr('height', h).attr('width', w);\n    g = svg.append('svg:g')\n    g.append('svg:path')\n     .attr('d', line(data))\n     .attr('stroke', (d) -> fill(Math.round(Math.random()) * 10))\n     .attr('fill', 'none')</pre>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12 bumper-30\">\n      <h3>application_controller.coffee</h3>\n      <div class=\"highlight\">\n<pre class=\"prettyprint lang-coffee\">App.ApplicationController = Ember.Controller.extend\n  numRows: 100\n  columns: Ember.computed ->\n    name = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Name'\n      getCellContent: (row) -> 'Asset ' + row['name']\n    open = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Open'\n      getCellContent: (row) -> row['open'].toFixed(2)\n    spark = Ember.Table.ColumnDefinition.create\n      columnWidth: 200\n      headerCellName: 'Sparkline'\n      tableCellViewClass: 'App.SparklineTableExample.SparkCellView'\n      getCellContent: Ember.K\n    close = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Close'\n      getCellContent: (row) -> row['close'].toFixed(2)\n    low = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'Low'\n      getCellContent: (row) -> row['low'].toFixed(2)\n    high = Ember.Table.ColumnDefinition.create\n      columnWidth: 100\n      headerCellName: 'High'\n      getCellContent: (row) -> row['high'].toFixed(2)\n    [name, open, spark, close, low, high]\n\n  content: Ember.computed ->\n    randomWalk = (numSteps) ->\n      lastValue = 0\n      [0...numSteps].map ->\n        lastValue = lastValue + d3.random.normal()()\n\n    [0...@get('numRows')].map (num, index) ->\n      data = randomWalk(100)\n      name: index\n      timeseries: data\n      open:  data[0]\n      close: data[99]\n      low:   Math.min.apply(null, data)\n      high:  Math.max.apply(null, data)\n   .property 'numRows'\n</pre>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/tree_table/table_header_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-content-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByColumn", "view.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n  <span class=\"ember-table-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.headerCellName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/tree_table/table_header_tree_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ember-table-toggle-span view.row.isLeaf::ember-table-toggle\n    view.row.isCollapsed:ember-table-expand:ember-table-collapse")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCollapse", "view.row", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n  <i class=\"icon-caret-down ember-table-toggle-icon\"></i>\n</span>\n<div class=\"ember-table-content-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByColumn", "view.column", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n  <span class=\"ember-table-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.column.headerCellName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ember_table/tree_table/table_tree_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ember-table-toggle-span view.row.isLeaf::ember-table-toggle\n    view.row.isCollapsed:ember-table-expand:ember-table-collapse")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCollapse", "view.row", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n  <i class=\"icon-caret-down ember-table-toggle-icon\"></i>\n</span>\n<span class=\"ember-table-content\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.cellContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</span>\n");
  return buffer;
  
});

Ember.TEMPLATES["license"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navigation", options) : helperMissing.call(depth0, "partial", "navigation", options))));
  data.buffer.push("\n\n\n<div class=\"hero-container small-hero-container\">\n  <div class=\"hero table-hero\">\n    <div class=\"hero-overlay\"></div>\n  </div>\n</div>\n\n\n<div class=\"section\">\n  <div class=\"container main-content-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 section-title\">\n        <h1>Code &amp; Documentation Licensing</h1>\n      </div>\n      <div class=\"col-md-6 col-md-offset-3\">\n        <p>The majority of open source software exclusively developed by Addepar is licensed under the liberal terms of the Apache License, Version 2.0. The documentation is generally available under the Creative Commons Attribution 3.0 Unported License. In the end, you are free to use, modify and distribute any documentation, source code or examples within our open source projects as long as you adhere to the licensing conditions present within the projects.</p>\n        <p>Also note that our engineers like to hack on their own open source projects in their free time. For code provided by our engineers outside of our official repositories on GitHub, Addepar does not grant any type of license, whether express or implied, to such code.</p>\n     </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});