'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
	  files: {
	    expand: true,
	    src: ['ui-kit-*/less/style.less', 'sample-*/less/style.less', 'hipstafood/less/style.less', 'crumbs/less/style.less', 'manual/less/style.less', 'Presentation/less/style.less'],
	    rename: function(src, dest) {
			return dest.replace('less/style.less', 'css/style.css');
	    },
	  },
    },
    watch: {
      less: {
        files: ['ui-kit-*/less/*.less', 'sample-*/less/*.less', 'common-files/less/*.less', 'hipstafood/less/*.less', 'crumbs/less/*.less', 'manual/less/*.less', 'Presentation/less/*.less'],
        tasks: 'less',
      }
    },
    includes: {
      manual: {
        src: ['manual/templates/*.html'],
        cwd: '.',
        dest: 'manual/',
        flatten: true,
      },
      kit: {
      	files: [
      		{src: 'ui-kit-blog/templates/*.html', dest: 'ui-kit-blog/'},
       		{src: 'ui-kit-contacts/templates/*.html', dest: 'ui-kit-contacts/'},
       		{src: 'ui-kit-content/templates/*.html', dest: 'ui-kit-content/'},
       		{src: 'ui-kit-crew/templates/*.html', dest: 'ui-kit-crew/'},
       		{src: 'ui-kit-footer/templates/*.html', dest: 'ui-kit-footer/'},
       		{src: 'ui-kit-header/templates/*.html', dest: 'ui-kit-header/'},
       		{src: 'ui-kit-price/templates/*.html', dest: 'ui-kit-price/'}, 		  
       		{src: 'ui-kit-projects/templates/*.html', dest: 'ui-kit-projects/'}, 	       		     		
      	],
        cwd: '.',
        flatten: true,
      },      
    },    
    
  });




  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less']);
  grunt.registerTask('build-manual', ['includes:manual']);
  grunt.registerTask('build-kit', ['includes:kit']);
};