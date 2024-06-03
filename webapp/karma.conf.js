module.exports = function(config) {
  config.set({
    frameworks: ["qunit", "ui5", "sinon"],
    plugins: [
      require('karma-qunit'),
      require('karma-ui5'),
      require('karma-sinon')
    ],
    ui5: {
      url: "https://openui5.hana.ondemand.com",
      mode: "html",
      config: {
        async: true,
        resourceRoots: {
          "sap.ui.demo.todo": "./base/webapp"
        }
      },
      tests: [
        "sap/ui/demo/todo/test/unit/AllTests"
      ]
    },
    browsers: ["Chrome"]
  });
};
