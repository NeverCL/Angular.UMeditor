/*!
 * angular-umeditor v1.0
 *
 * Author: Never、C
 * Copyright: 2016, Never、C, neverc.cn
 *
 * https://github.com/NeverCL/Angular.UMeditor
 */
; (function (root, factory) {
    if (typeof root.define === 'function' && root.define.amd) {
        root.define(['UMeditor', 'angular'], factory);
    } else factory(UM);
}(window, function (um) {
    'use strict';
    angular.module('ng.umeditor', [])
        .constant('umeditorCfg', {
            id: 'container',
            style: {
                width: '500px',
                height: '300px'
            }
        })
        .directive('umeditor', ['umeditorCfg', function (cfg) {
            return {
                require: '?ngModel',
                replace: true,
                template: '<script type="text/plain"></script>',
                link: fileLink
            };
            function fileLink(scope, ele, attr, ngModel) {
                if (!ngModel)
                    return;

                var idName = attr.id ? attr.id : cfg.id;
                ele.attr('id', idName);

                if (!(attr.width || attr.height))
                    ele.css(cfg.style);
                var editor = um.createEditor(idName);

                ngModel.$render = function () {
                    editor.ready(function () {
                        if (ngModel.$modelValue)
                            editor.setContent(ngModel.$modelValue);
                    });
                };

                editor.ready(function () {
                    editor.addListener('contentChange', function () {
                        ngModel.$setViewValue(editor.getContent());
                    });
                });
            }
        }]);
}));