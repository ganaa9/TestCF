module.exports = function(config) {
  config.set({
    frameworks: ["qunit", "ui5", "sinon"],
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
