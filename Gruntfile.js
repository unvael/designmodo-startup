'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
	  files: {
	    expand: true,
	    src: ['ui-kit-*/less/style.less', 'tpl-*/less/style.less', 'hipstafood/less/style.less', 'showcase2/less/style.less'],
	    rename: function(src, dest) {
			return dest.replace('less/style.less', 'css/style.css');
	    },
	  },
    },
    watch: {
      less: {
        files: ['ui-kit-*/less/*.less', 'tpl-*/less/*.less', 'common-files/less/*.less', 'hipstafood/less/*.less', 'showcase2/less/*.less'],
        tasks: 'less',
      }
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less']);

};