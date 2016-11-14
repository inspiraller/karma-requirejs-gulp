//requirejs = (typeof requirejs!== 'undefined')? requirejs:{config:function(){}};
requirejs.config({
		baseUrl:'js/modules',
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require(['app'],function(app){

});