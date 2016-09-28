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
		},

        less: {
            development: {
                options: {
                    paths: ["./assets"]
                },
                files: {"./assets/style.css": "./assets/style.less"}
            },
            production: {
                options: {
                    paths: ["./assets"]
                },
                files: {"./assets/style.css": "./assets/style.less"}
            }
        },        
	});

    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('jekyll-prod', function(){
		process.env.JEKYLL_ENV = 'production';
    	grunt.task.run('jekyll');
	});

	grunt.registerTask('default', ['less', 'jekyll-prod', 'clean', 'copy']);
};