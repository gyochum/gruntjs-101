module.exports = function(grunt){
	grunt.initConfig({
		
		//command to run: grunt concat
		concat: {
			options: {
				separator: '\n\n//-----------------------\n',
				banner: '\n\n//-----------------------\n'
			},
			dist: {
				src: ['components/scripts/*.js'],
				dest: 'builds/development/js/scripts.js'
			},
			prod: {
				src: ['components/scripts/*.js'],
				dest: 'builds/production/js/scripts.js'
			}
		},
		//command to run: grunt sass
		sass: {
			options: {
				style: 'expanded'
			},
			dist: {				
				files: {
					'builds/development/css/style.css': 'components/sass/style.scss'					
				}
			}
		},//sass
		
		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: [
					'builds/development/**/*.html',
					'components/scripts/**/*.js',
					'components/sass/**/*.scss'
				],
				tasks: [
					'concat',
					'sass'
				]
			}
		}
				
	}); //init config section
	
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	//register default task
	grunt.registerTask('default', ['concat', 'sass', 'watch']);
}; //wrapper function