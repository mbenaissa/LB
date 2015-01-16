var CONFIG;

(function() {

var appPrefix = '/';
var viewUrlPrefix = 'views/';
var appVersion = 8;

CONFIG = {

  version : appVersion,

  baseDirectory : appPrefix,
  templateDirectory : viewUrlPrefix,
  templateFileQuerystring : "?v=" + appVersion,

  routing : {

    prefix : '',
    html5Mode : false

  },

  pageUrlPrefix : viewUrlPrefix + 'pages/',
  partialUrlPrefix : viewUrlPrefix + 'partials/',

  templateFileSuffix : '_tpl.ejs',

  prepareViewTemplateUrl : function(url) {
    return this.pageUrlPrefix + url + this.templateFileSuffix + this.templateFileQuerystring;
  }

};

})();
