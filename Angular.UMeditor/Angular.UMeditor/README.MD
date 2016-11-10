## 说明

UMeditor是UEditor的mini版本

[官网地址](http://ueditor.baidu.com/website/umeditor.html)


在require模式下:

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