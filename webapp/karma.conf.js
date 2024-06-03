module.exports = function(config) {
  config.set({
    frameworks: ["ui5", "qunit", "sinon"],
    ui5: {
      url: "https://openui5.hana.ondemand.com",
      mode: "script",
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