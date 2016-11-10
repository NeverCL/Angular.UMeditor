require.config({
    paths: {
        jquery: ['jquery-3.1.1.min', '//cdn.bootcss.com/jquery/1.12.4/jquery'],
        angular: 'angular'
    }
});

require.config({
    paths: {
        'umeditorCfg': 'umeditor/umeditor.config',
        'UMeditor': 'umeditor/umeditor.min'
    },
    shim: {
        'UMeditor': {
            deps: ['umeditorCfg', 'jquery'],
            exports: 'UM'
        }
    }
});

require(['UMeditor', 'angular-umeditor.min', 'css!umeditor/themes/default/css/umeditor.min'], function () {
    angular.module('myApp', ['ng.umeditor']).controller('helloCtrl', function ($scope) {
        $scope.user = '<h1>测试a1B2C3</h1>';
    });
    angular.bootstrap(document, ['myApp']);
});