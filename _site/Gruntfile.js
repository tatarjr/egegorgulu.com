module.exports = function(grunt) {

	grunt.initConfig({
	  
		jekyll : {                            
	    	prod : {                         
	      		src : '.',
	    		dest : './_site'
	    	}
		},

		clean : {
			options : { force: true },
	  		prod : ["/var/www/test.com/*"] 
		},

		copy: {
	  		prod: {
	  			files: [
	  				{ expand : true, cwd: '_site/', src : '**', dest : '/var/www/test.com/' }
	  			]
	  		}
		}

	});

	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['jekyll', 'clean', 'copy']);
};