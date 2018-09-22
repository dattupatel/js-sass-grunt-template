module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner:
      '/* <%= pkg.name || javascript %> -v <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
    clean: {
      src: ["<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>"]
    },
    eslint: {
      options: {
        configFile: "eslint.json"
      },
      src: ["Gruntfile.js", "<%= pkg.srcAssetsDir %>/js/**.js"]
    },
    copy: {
      scripts: {
        files: [
          {
            expand: true,
            src: ["<%= pkg.srcAssetsDir %>/js/*"],
            dest: "<%= pkg.webDir %>"
          }
        ]
      },
      vendorScripts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              "<%= pkg.vendorAssetsDir %>/bootstrap/dist/js/bootstrap.js",
              "<%= pkg.vendorAssetsDir %>/jquery/dist/jquery.js",
              "<%= pkg.vendorAssetsDir %>/requirejs/require.js",
              "<%= pkg.vendorAssetsDir %>/popper.js/dist/umd/popper.js"
            ],
            dest: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/js/vendor"
          }
        ]
      },
      extra: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["<%= pkg.srcAssetsDir %>/fonts/*"],
            dest: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/fonts"
          },
          {
            expand: true,
            flatten: true,
            src: ["<%= pkg.srcAssetsDir %>/images/*"],
            dest: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/images"
          },
          {
            expand: true,
            flatten: true,
            src: ["<%= pkg.srcAssetsDir %>/videos/*"],
            dest: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/videos"
          },
          {
            expand: true,
            flatten: true,
            src: ["<%= pkg.vendorAssetsDir %>/popper.js/dist/umd/popper.js"],
            dest: "<%= pkg.webDir %>"
          }
        ]
      }
    },
    uglify: {
      options: {
        banner: "<%= banner %>",
        preserveComments: false
      },
      build: {
        files: [
          {
            expand: true,
            cwd: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/js/",
            src: ["*.js", "!*.min.js"],
            dest: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/js/",
            ext: ".min.js",
            extDot: "last"
          },
          {
            expand: true,
            cwd: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/js/vendor/",
            src: ["*.js", "!*.min.js"],
            dest: "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/js/vendor/",
            ext: ".min.js",
            extDot: "last"
          }
        ]
      }
    },
    sass: {
      dev: {
        options: {
          style: "expanded",
          compass: false
        },
        files: {
          "<%= pkg.srcAssetsDir %>/css/bootstrap.css":
            "<%= pkg.srcAssetsDir %>/scss/bootstrap.scss",
          "<%= pkg.srcAssetsDir %>/css/site.css":
            "<%= pkg.srcAssetsDir %>/scss/site.scss"
        }
      }
    },

    cssmin: {
      combine: {
        options: {
          banner: "<%= banner %>",
          keepSpecialComments: 0
        },
        files: {
          "<%= pkg.webDir %>/<%= pkg.srcAssetsDir %>/css/main.css": [
            "<%= pkg.srcAssetsDir %>/css/*"
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", [
    "clean",
    "eslint",
    "sass",
    "copy",
    "uglify",
    "cssmin"
  ]);

  grunt.registerTask("makecss", ["sass", "cssmin"]);

  grunt.registerTask("makejs", ["eslint", "copy:scripts"]);

  grunt.registerTask("watch", ["eslint", "copy:scripts", "sass", "cssmin"]);
};
