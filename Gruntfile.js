'use strict';

module.exports = function(grunt) {

    // Tasks
    grunt.initConfig({
        less: {
            files: {
                expand: true,
                src: [
                    'ui-kit/ui-kit-*/less/style.less',
                    'ui-kit/ui-kit-*/less/*-style.less',
                    'ui-kit/ui-kit-*/less/ui-kit-styles.less',
                    'samples/sample-*/less/style.less',
                    'hipstafood/less/style.less',
                    'crumbs/less/style.less',
                    'manual/read/less/style.less',
                    'Presentation/less/style.less',
                    'demo/ui-kit/ui-kit-*/less/style.less',
                    'demo/ui-kit/ui-kit-*/less/ui-kit-styles.less',
                    'demo/samples/sample-*/less/style.less',
                    'demo/manual/read/less/style.less',
                ],
                rename: function(src, dest) {
                    return dest.replace('less/style.less', 'css/style.css')
                               .replace('less/ui-kit-styles.less', 'css/ui-kit-styles.css')
                               .replace(/less\/(.*\-style)\.less/, 'css/$1.css');
                },
            },
        },
        includes: {
            options: {
                includeRegexp: /include\s+"(\S+)"/,
            },
            manual: {
                src: ['manual/templates/*.html'],
                cwd: '.',
                dest: 'manual/read/',
                flatten: true
            },
            'demo-manual': {
                src: ['demo/manual/templates/*.html'],
                cwd: '.',
                dest: 'demo/manual/read/',
                flatten: true
            },
            kit: {
                files: [{
                    src: 'ui-kit/ui-kit-blog/templates/*.html',
                    dest: 'ui-kit/ui-kit-blog/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-contacts/templates/*.html',
                    dest: 'ui-kit/ui-kit-contacts/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-content/templates/*.html',
                    dest: 'ui-kit/ui-kit-content/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-crew/templates/*.html',
                    dest: 'ui-kit/ui-kit-crew/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-footer/templates/*.html',
                    dest: 'ui-kit/ui-kit-footer/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-header/templates/*.html',
                    dest: 'ui-kit/ui-kit-header/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-price/templates/*.html',
                    dest: 'ui-kit/ui-kit-price/',
                    flatten: true
                }, {
                    src: 'ui-kit/ui-kit-projects/templates/*.html',
                    dest: 'ui-kit/ui-kit-projects/',
                    flatten: true
                }, {
                    src: 'demo/ui-kit/ui-kit-content/templates/*.html',
                    dest: 'demo/ui-kit/ui-kit-content/',
                    flatten: true
                }, {
                    src: 'demo/ui-kit/ui-kit-footer/templates/*.html',
                    dest: 'demo/ui-kit/ui-kit-footer/',
                    flatten: true
                }, {
                    src: 'demo/ui-kit/ui-kit-header/templates/*.html',
                    dest: 'demo/ui-kit/ui-kit-header/',
                    flatten: true
                }, {
                    src: 'demo/ui-kit/ui-kit-price/templates/*.html',
                    dest: 'demo/ui-kit/ui-kit-price/',
                    flatten: true
                }, ],
            },
        },
        copy: {
            release: {
                expand: true,
                force: true,
                files: [{
                    src: ['common-files/**'],
                    dest: 'build-release/'
                }, {
                    src: ['ui-kit/**'],
                    dest: 'build-release/'
                }, {
                    src: ['samples/**'],
                    dest: 'build-release/'
                }, {
                    src: ['manual/**'],
                    dest: 'build-release/'
                }, {
                    src: ['flat-ui/**'],
                    dest: 'build-release/'
                }, {
                    src: ['demo/common-files/**'],
                    dest: 'build-demo/'
                }, {
                    src: ['demo/ui-kit/**'],
                    dest: 'build-demo/'
                }, {
                    src: ['demo/samples/**'],
                    dest: 'build-demo/'
                }, {
                    src: ['demo/manual/**'],
                    dest: 'build-demo/'
                }, {
                    src: ['demo/flat-ui/**'],
                    dest: 'build-demo/'
                }]
            },
            demo: {
                expand: true,
                force: true,
                files: [{
                    src: ['common-files/**'],
                    dest: 'demo/'
                }, {
                    src: ['flat-ui/**'],
                    dest: 'demo/'
                }, {
                    src: [
                        // Files list that need to be copied from /samples to /demo/samples
                        'samples/sample-03/**',
                        'samples/sample-04/**',
                        'samples/template/*.html',
                    ],
                    dest: 'demo/'
                }, {
                    src: [
                        // List of html and less files that need to be copied from /ui-kit to /demo/ui-kit
                        'ui-kit/**/{for-tpl,less}/content-7.*',
                        'ui-kit/**/{for-tpl,less}/content-8.*',
                        'ui-kit/**/{for-tpl,less}/content-11.*',
                        'ui-kit/**/{for-tpl,less}/content-13.*',
                        'ui-kit/**/{for-tpl,less}/content-23.*',
                        'ui-kit/**/{for-tpl,less}/footer-2.*',
                        'ui-kit/**/{for-tpl,less}/footer-3.*',
                        'ui-kit/**/{for-tpl,less}/header-10.*',
                        'ui-kit/**/{for-tpl,less}/header-11.*',
                        'ui-kit/**/{for-tpl,less}/price-1.*',
                        'ui-kit/**/{for-tpl,less}/price-common.*'
                    ],
                    dest: 'demo/'
                }, {
                    src: [
                        // Files list that need to be copied from /manual to /demo/manual
                        'manual/img/**',
                        'manual/js/**',
                        'manual/{for-tpl,templates}/faq.html',
                        'manual/{for-tpl,templates}/flat-ui.html',
                        'manual/{for-tpl,templates}/tutorials.html',
                        'manual/for-tpl/hti.html',
                        'manual/for-tpl/main-page.html',
                        'manual/for-tpl/man-footer.html',
                        'manual/for-tpl/man-header-inc.html',
                        'manual/templates/how_to_install.html',
                        'manual/templates/index.html',
                        'manual/templates/startup-css-micro.html',
                        'manual/read/video/**',
                        'manual/read/less/**',
                        '!manual/read/less/manual-ui-kit-blocks.less',

                        'manual/templates/contents.html',
                        'manual/templates/contents2.html',
                        'manual/templates/footers.html',
                        'manual/templates/headers.html',
                        'manual/templates/prices.html',

                        'manual/for-tpl/contents/c7-man.html',
                        'manual/for-tpl/contents/c8-man.html',
                        'manual/for-tpl/contents/c11-man.html',
                        'manual/for-tpl/contents/c13-man.html',
                        'manual/for-tpl/contents/c23-man.html',

                        'manual/for-tpl/footers/f2-man.html',
                        'manual/for-tpl/footers/f3-man.html',

                        'manual/for-tpl/headers/h10-man.html',
                        'manual/for-tpl/headers/h11-man.html',

                        'manual/for-tpl/prices/ps1-man.html'
                    ],
                    dest: 'demo/'
                }]
            }
        },
        clean: {
            prerelease: {
                src: ['build-release/', 'build-demo/']
            },
            demo: {
                src: [
                    'demo/common-files',
                    'demo/flat-ui',
                    'demo/samples/sample*',
                    'demo/samples/template/*.html',
                    'demo/ui-kit/**/for-tpl/',
                    'demo/ui-kit/**/less/content*',
                    'demo/ui-kit/**/less/header*',
                    'demo/ui-kit/**/less/price*',
                    'demo/ui-kit/**/less/footer*',
                    'demo/manual/img',
                    'demo/manual/js',
                    'demo/manual/for-tpl/**/*.html',
                    '!demo/manual/for-tpl/contents.html',
                    '!demo/manual/for-tpl/contents2.html',
                    '!demo/manual/for-tpl/footers.html',
                    '!demo/manual/for-tpl/headers.html',
                    '!demo/manual/for-tpl/prices.html',
                    '!demo/manual/for-tpl/man-header-menu.html',
                    '!demo/manual/for-tpl/**/sample-*',
                    'demo/manual/read/video/*',
                    'demo/manual/read/less/*',
                    '!demo/manual/read/less/manual-ui-kit-blocks.less',
                    'demo/manual/templates/*',
                ]
            },
            release: {
                src: [
                    'build-release/manual/templates',
                    'build-release/manual/for-tpl',
                    'build-release/manual/read/less',
                    'build-release/ui-kit/ui-kit-*/for-tpl',
                    'build-release/ui-kit/ui-kit-*/templates',
                    'build-demo/demo/manual/templates',
                    'build-demo/demo/manual/for-tpl',
                    'build-demo/demo/ui-kit/ui-kit-*/for-tpl',
                    'build-demo/demo/ui-kit/ui-kit-*/templates',
                    'build-demo/demo/manual/read/less',
                    'build-demo/demo/ui-kit/ui-kit-demo'
                ]
            }
        },
        lineending: {
            options: {
                eol: 'crlf'
            },
            files: {
                expand: true,
                src: ['**/*.less', '**/*.css', '**/*.js', '**/*.html']
            }
        },
        prettify: {
            templates: {
                expand: true,
                src: ['ui-kit/**/*.html', 'samples/**/*.html', 'manual/**/*.html'],
            },
            'after-build-manual': {
                expand: true,
                src: ['manual/read/*.html', 'demo/manual/read/*.html']
            },
            'after-build-kit': {
                expand: true,
                src: ['ui-kit/ui-kit-*/*.html', 'demo/ui-kit/ui-kit-*/*.html']
            }
        }
    });
    
    // Load plugins
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-lineending');
    grunt.loadNpmTasks('grunt-prettify');

    // Default tasks
    grunt.registerTask('default', ['less']);
    grunt.registerTask('build-manual', ['includes:manual', 'includes:demo-manual', 'prettify:after-build-manual']);
    grunt.registerTask('build-kit', ['includes:kit', 'prettify:after-build-kit']);
    grunt.registerTask('build-demo', ['clean:demo', 'copy:demo']);
    grunt.registerTask('release', ['build-demo', 'less', 'build-kit', 'build-manual', 'lineending', 'clean:prerelease', 'copy:release', 'clean:release']);
};
