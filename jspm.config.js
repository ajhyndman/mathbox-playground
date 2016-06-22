SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "bower:": "jspm_packages/bower/",
    "mathbox-playground/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "mathbox-playground": {
      "main": "mathbox-playground.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "sourceMaps": "inline"
          },
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "bower:*.json"
  ],
  map: {
    "mathbox": "bower:mathbox@0.0.5"
  },
  packages: {}
});
