module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					"https://quilt9.github.io/HipVeg/_/js/script.js": ["_/components/js/*.js"]
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: "config.rb"
				} //options
			} //dev
		}, //compass
		watch: {
			options: {livereload: true},
			scripts: {
				files: ["_/components/js/*.js"],
				tasks: ["uglify"]
			}, //scripts
			sass: {
				files: ["_/components/scss/*.scss"],
				tasks: ["compass:dev"]
			}, //sass
			html: {
				files: ["*.html"]
			} //html
		} //watch
	}) //initConfig
	grunt.registerTask("default","watch");
} // exports