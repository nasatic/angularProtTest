import { browser } from 'protractor';
import { After, Before, AfterAll, BeforeAll } from '../node_modules/cucumber';
import { exec } from 'child_process';
// import { AfterAll } from 'cucumber';
const log4js = require('../node_modules/log4js');
const logger = log4js.getLogger("../support/logger.ts");


Before(() => {
    logger.info("+++++++++ BeforeScenario hook executed ++++++++");

});


After(() => {
    logger.info("+++++++++ AfterScenario hook executed ++++++++");
    try {
        exec('taskkill chromedriver.exe');
        logger.info("+++++++++ Chromedriver instance deleted ++++++++");
    } catch (e) {
        logger.info(e);
    }

    After(function(scenarioResult) {
        if (scenarioResult.result.status === 'failed') {
            let self = this;
            return browser.takeScreenshot().then(function(base64png) {
                self.attach(new Buffer(base64png, 'base64'), 'image/png');
            });
        }
    });
});