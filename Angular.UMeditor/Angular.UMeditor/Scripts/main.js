require.config({
    paths: {
        jquery: ['jquery-3.1.1.min', '//cdn.bootcss.com/jquery/1.12.4/jquery'],
        angular: 'angular'
    }
});

require.config({
    paths: {
        'UMeditor': 'umeditor/umeditor.min'
    },
    shim: {
        'UMeditor': {
            deps: ['umeditor/umeditor.config', 'jquery'],
            exports: 'UM'
        }
    }
});

require(['angular-umeditor.min', 'css!umeditor/themes/default/css/umeditor.min'], function () {
    angular.module('myApp', ['ng.umeditor']);
    angular.bootstrap(document, ['myApp']);
});