'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
	  files: {
	    expand: true,
	    src: [
			'ui-kit/ui-kit-*/less/style.less',
			'samples/sample-*/less/style.less',
			'hipstafood/less/style.less',
			'crumbs/less/style.less',
			'manual/less/style.less',
			'Presentation/less/style.less'
	    ],
	    rename: function(src, dest) {
			return dest.replace('less/style.less', 'css/style.css');
	    },
	  },
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
      		{src: 'ui-kit/ui-kit-blog/templates/*.html', dest: 'ui-kit/ui-kit-blog/', flatten: true},
       		{src: 'ui-kit/ui-kit-contacts/templates/*.html', dest: 'ui-kit/ui-kit-contacts/', flatten: true},
       		{src: 'ui-kit/ui-kit-content/templates/*.html', dest: 'ui-kit/ui-kit-content/', flatten: true},
       		{src: 'ui-kit/ui-kit-crew/templates/*.html', dest: 'ui-kit/ui-kit-crew/', flatten: true},
       		{src: 'ui-kit/ui-kit-footer/templates/*.html', dest: 'ui-kit/ui-kit-footer/', flatten: true},
       		{src: 'ui-kit/ui-kit-header/templates/*.html', dest: 'ui-kit/ui-kit-header/', flatten: true},
       		{src: 'ui-kit/ui-kit-price/templates/*.html', dest: 'ui-kit/ui-kit-price/', flatten: true}, 		  
       		{src: 'ui-kit/ui-kit-projects/templates/*.html', dest: 'ui-kit/ui-kit-projects/', flatten: true}, 	       		     		
      	],
      },      
    },
    copy: {
    	release: {
    		expand: true,
    		force: true,
			files: [
				{src: ['common-files/**'], dest: 'build-release/'},
				{src: ['ui-kit/**'], dest: 'build-release/'},
				{src: ['samples/**'], dest: 'build-release/'},
				{src: ['manual/**'], dest: 'build-release/'},
				{src: ['flat-ui/**'], dest: 'build-release/'},
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