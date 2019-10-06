'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var prot = require("protractor");
var child_process_1 = require("child_process");
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    allScriptsTimeout: 100000,
    multiCapabilities: [
        // {
        //    'browserName': 'internet explorer', 
        //    'platform': 'ANY', 
        //    'version': '11',    
        // }        
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['incognito'],
            }
        },
    ],
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/registeration/#/login',
    baseUrl1: 'http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile',
    plugins: [
        {
            // cucumber reporting plugin
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                displayDuration: true
            }
        }
    ],
    maxSessions: 3,
    framework: 'custom',
    restartBrowserBetweenTests: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../../features/*.feature',
    ],
    onPrepare: function () {
        prot.browser.ignoreSynchronization = true;
        require('ts-node').register({ project: './tsconfig.json' });
        child_process_1.exec("del cucumberReport.*.json");
        child_process_1.exec('taskkill chromedriver.exe');
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: 'json:./cucumberReport.json',
        strict: true,
        require: ['../../pages/*.ts', '../../stepdefinitions/*.ts', '../../support/*.ts'],
        tags: ['@Test']
    }
};
