const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me',
    setupNodeEvents(on, config) {
      // implement node event listeners here, se necessário
    },
  },
  video: true,

  // 👇 Adicione a configuração do Mochawesome abaixo da chave `video`
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});
