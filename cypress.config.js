const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 240000,
  requestTimeout: 60000,
  chromeWebSecurity: false,
  userAgent: "testing_agent",
  retries: 1,
  screenshotOnRunFailure: true,
  videoUploadOnPasses: true,
  e2e: {
    baseUrl: '...',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    async setupNodeEvents(on, config) {
      const result = await cloudPlugin(on, config);
      return result;
    },
  },

  env: {
    AUTH_USER: "",
    AUTH_PASS: "",

    placeOrder: false,
    applyRules: false,
    ignore_JS_Error: false,

    backend_url: "/index.php/admin",
    backend_user: "admin",
    backend_passw: "admin123",

    p2_url: 'v1/r/d/b/p2',


    //****************************************** STAGE *****************************************************/

    // ***** STAGE ***** --> activate these when testing against stage
    // pp_hostname: '...',  

    //********************************************** PRODUCTION *************************************************/

    // ***** PRODUCTION ***** --> activate these when testing against production
    pp_hostname: '...',
  }
})