const steps= require("./src/features");

exports.config = {

  output: './report',
  helpers: {
    Puppeteer: {

      //url: 'http://sb2qa.somosbelcorp.com/',
      url: 'https://www.somosbelcorp.com/',
      //url:'https://sbganaqa.somosbelcorp.com/',
      //fullPageScreenshots: true,
      windowSize: "1366x625",
      //defaultViewport: null,
      show:true,
      chrome: {
        args: [
                '--start-maximized'
              //'--use-fake-ui-for-media-stream',
              //'--disable-web-security',
              //'--use-fake-device-for-media-stream',
              //'--allow-file-access-from-files',
              //'--allow-running-insecure-content',
              //'--window-size=1920,1080'
        ]
      }
    }
  },

  Mochawesome: {  
      uniqueScreenshotNames: true
  },
  
  include: {},

  mocha: {
    reporterOptions: {
      reportDir: "./report/",
      reportFilename: 'GanaMas-Web',
      reportTitle: 'Somos-Belcorp',
      autoOpen:true,
      ts:'',
    }
  },

  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/**/**/*.feature',
    steps: [
      ...steps
         ]
  },

  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true
    }
  },

  tests: './*_test.js',
  name: 'Portal-SomosBelcorp'
}