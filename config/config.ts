'use strict';
import { browser, Config } from 'protractor';
declare const require: any;
let path = require('path');
let prot = require("protractor");
import { exec } from 'child_process';

export const config: Config = {
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
        // {
        //     browserName: 'firefox',
        //     'moz:firefoxOptions': {
        //         args: ['incognito'],
        //         prefs: {
        //             'browser.download.folderList': 2,
        //             'browser.download.dir': downloadPath,
        //             'services.sync.prefs.sync.browser.download.useDownloadDir': true,
        //             'browser.download.useDownloadDir': true,
        //             'browser.helperApps.neverAsk.saveToDisk':
        //                 'application/vnd.openxmlformats-officedocument.presentationml.presentation;charset=UTF-8,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        //         }
        //     }
        // }
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

    onPrepare: () => {
        prot.browser.ignoreSynchronization = true;
        require('ts-node').register({ project: './tsconfig.json' });
        exec("del cucumberReport.*.json");
        exec('taskkill chromedriver.exe');
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: 'json:./cucumberReport.json',
        strict: true,
        require: ['../../pages/*.ts', '../../stepdefinitions/*.ts', '../../support/*.ts'],
        tags: ['@Test']
    }
}