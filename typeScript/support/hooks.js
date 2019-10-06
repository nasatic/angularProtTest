"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var cucumber_1 = require("../node_modules/cucumber");
var child_process_1 = require("child_process");
// import { AfterAll } from 'cucumber';
var log4js = require('../node_modules/log4js');
var logger = log4js.getLogger("../support/logger.ts");
cucumber_1.Before(function () {
    logger.info("+++++++++ BeforeScenario hook executed ++++++++");
});
cucumber_1.After(function () {
    logger.info("+++++++++ AfterScenario hook executed ++++++++");
    try {
        child_process_1.exec('taskkill chromedriver.exe');
        logger.info("+++++++++ Chromedriver instance deleted ++++++++");
    }
    catch (e) {
        logger.info(e);
    }
    cucumber_1.After(function (scenarioResult) {
        if (scenarioResult.result.status === 'failed') {
            var self_1 = this;
            return protractor_1.browser.takeScreenshot().then(function (base64png) {
                self_1.attach(new Buffer(base64png, 'base64'), 'image/png');
            });
        }
    });
});
