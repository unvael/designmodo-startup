'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
	  files: {
	    expand: true,
	    src: ['ui-kit-*/less/style.less', 'sample-*/less/style.less', 'hipstafood/less/style.less', 'crumbs/less/style.less', 'manual/less/style.less'],
	    rename: function(src, dest) {
			return dest.replace('less/style.less', 'css/style.css');
	    },
	  },
    },
    watch: {
      less: {
        files: ['ui-kit-*/less/*.less', 'sample-*/less/*.less', 'common-files/less/*.less', 'hipstafood/less/*.less', 'crumbs/less/*.less', 'manual/less/*.less'],
        tasks: 'less',
      }
    },
    
    
    
  });
  
  
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less']);
  

};