module.exports = function(config) {
    config.set({
  
      frameworks: ["ui5", "qunit", "sinon"],
  
      ui5: {
        url: "https://openui5.hana.ondemand.com"
      },
  
      browsers: ["Chrome"]
  
    });
  };