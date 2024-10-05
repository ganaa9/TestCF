module.exports = function(config) {
    config.set({
      frameworks: ['qunit'],  // Vous pouvez changer cela si vous utilisez Jasmine ou un autre framework
      files: [
        'webapp/**/*.js',   // fichiers sources
        'test/unit/**/*.js' // fichiers de test
      ],
      browsers: ['ChromeHeadless'], // Utilisation de Chrome sans interface pour CI/CD
      singleRun: true,
      reporters: ['progress', 'coverage'], // Pour afficher les résultats des tests et la couverture du code
      preprocessors: {
        'webapp/**/*.js': ['coverage'] // Générer un rapport de couverture de code
      }
    });
  };
  