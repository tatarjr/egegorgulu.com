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
	  		prod : ["/var/www/egegorgulu.com/*"] 
		},

		copy: {
	  		prod: {
	  			files: [
	  				{ expand : true, cwd: '_site/', src : '**', dest : '/var/www/egegorgulu.com/' }
	  			]
	  		}
		}

	});

	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['jekyll', 'clean', 'copy']);
};