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
      		{src: 'ui-kit-blog/templates/*.html', dest: 'ui-kit-blog/', flatten: true},
       		{src: 'ui-kit-contacts/templates/*.html', dest: 'ui-kit-contacts/', flatten: true},
       		{src: 'ui-kit-content/templates/*.html', dest: 'ui-kit-content/', flatten: true},
       		{src: 'ui-kit-crew/templates/*.html', dest: 'ui-kit-crew/', flatten: true},
       		{src: 'ui-kit-footer/templates/*.html', dest: 'ui-kit-footer/', flatten: true},
       		{src: 'ui-kit-header/templates/*.html', dest: 'ui-kit-header/', flatten: true},
       		{src: 'ui-kit-price/templates/*.html', dest: 'ui-kit-price/', flatten: true}, 		  
       		{src: 'ui-kit-projects/templates/*.html', dest: 'ui-kit-projects/', flatten: true}, 	       		     		
      	],
      },      
    },
    copy: {
    	release: {
    		expand: true,
    		force: true,
			files: [
				{src: ['common-files/**'], dest: 'build-release/'},
				{src: ['ui-kit-*/**'], dest: 'build-release/ui-kit/'},
				{src: ['sample-*/**'], dest: 'build-release/samples/'},
				{src: ['manual/**'], dest: 'build-release/'},
			]
		}	   	
    },
    clean: {
    	prerelease: {
    		src: 'build-release/'
    	},
    	release: {
    		src: [
    			'build-release/manual/templates', 
    			'build-release/manual/for-tpl',
    			'build-release/ui-kit/ui-kit-*/for-tpl',
    			'build-release/ui-kit/ui-kit-*/templates',
    		]
    	}
    }   
    
  });




  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['less']);
  grunt.registerTask('build-manual', ['includes:manual']);
  grunt.registerTask('build-kit', ['includes:kit']);
  grunt.registerTask('release', ['less', 'build-kit', 'build-manual', 'clean:prerelease', 'copy:release', 'clean:release']);
};