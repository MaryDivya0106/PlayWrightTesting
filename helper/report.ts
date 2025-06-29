const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir:   "test-results",      //./path-to-your-json-output/
  reportPath: "./",               //  ./path-where-the-report-needs-to-be/
  reportName: "Playwright Automation Test",  //report name to be displayed         
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "secret_sauce Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "1" },
      { label: "Execution Start Time", value: Date.now },
      { label: "Execution End Time", value: Date.now},
    ],
  },
});