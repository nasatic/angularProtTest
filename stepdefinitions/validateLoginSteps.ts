'use strict';
import { ValidatePageObject } from '../pages/validatePage';
import { CreateUserPageObject } from '../pages/createUserPage';
import { Before, Given, Then, When } from 'cucumber';
import { ElementFinder, element, by, protractor, ElementArrayFinder, $, browser } from 'protractor';
const { setDefaultTimeout } = require('cucumber');
import { config } from '../config/config';
setDefaultTimeout(60 * 1000);
const log4js = require('../node_modules/log4js');
setDefaultTimeout(60 * 1000);
let prot = require("protractor");
let createUser: CreateUserPageObject = new CreateUserPageObject();
let validate: ValidatePageObject = new ValidatePageObject();
const logger = log4js.getLogger("../support/logger.ts");

Before(() => {
    validate = new ValidatePageObject();
    createUser = new CreateUserPageObject();
    prot.browser.manage().deleteAllCookies();
    prot.browser.manage().window().maximize();
});


Given(/^I have navigated to the login page$/, async () => {
    await validate.getBrowser();
    logger.info("########## Given step executed ##########");

});

When(/^I enter username '(.*?)' and password '(.*?)'$/, async (uname: string, pass: string) => {
    await validate.delayBrowser(3);
    await validate.enterUserName(uname);
    await validate.delayBrowser(2);
    await validate.enterPassword(pass);
    logger.info("@@@@@@@@@@ When step executed @@@@@@@@@@");
});

Then(/^I enter desctiption '(.*?)'$/, async (desc: string) => {
    await validate.delayBrowser(2);
    await validate.enterDesc(desc);
    await validate.delayBrowser(2);
    logger.info("$$$$$$$$$$$ 1st Then step executed $$$$$$$$$$");
});

Then(/^I click on login button$/, async () => {
    await validate.ClickOnLogon();
    await validate.delayBrowser(2);
    logger.info("*********** 2nd Then step executed ************");
});

Then(/^I am taken to the home page$/, async () => {
    logger.info("This is user main page xxx");
    await validate.verifyLogonSuccess();
    logger.info("============= 3rd Then step executed ============");

});
Then(/^I log out of page$/, async () => {
    await validate.delayBrowser(2);
    await validate.ClickOnLogout();
    console.log("&&&&&&&&&&&&&& 4th Then step executed &&&&&&&&&&&&&");

});

Then(/^error is thrown on page$/, async () => {
    await validate.delayBrowser(3);
    await validate.verifyLogonError();
    logger.info("++++++++ 5th Then step executed +++++++++");
    logger.warn();    

});

Given(/^I have navigated to user demographic page$/, async () => {
    await createUser.gotoCreateUser();
    logger.info("########## Given step executed ##########");

});

When(/^I enter name '(.*?)' and email '(.*?)'$/, async (name: string, email: string) => {
    await createUser.enterName(name);
    await createUser.delayBrowser(2);
    await createUser.enterEmail(email);
    logger.info("@@@@@@@@@@ When step executed @@@@@@@@@@");
});

Then(/^I go to next section$/, async () => {
    await createUser.delayBrowser(2);
    await createUser.gotoNextSection();
    logger.info("$$$$$$$$$$$ Got to next section executed $$$$$$$$$$");

});

Then(/^I select ps4$/, async () => {
    await createUser.delayBrowser(2);
    await createUser.selectPS4();
    await createUser.delayBrowser(3);
    logger.info("$$$$$$$$$$$ PS4 Selected $$$$$$$$$$");
});

Then(/^I am taken to the test complete page$/, async () => {
    // let webpagetitle = '';
    // prot.browser.getTitle().then(function(webpagetitle){
    //     logger.info("+++++++++++++++" + webpagetitle);
    // });
    await createUser.delayBrowser(3);
    await createUser.verifyCompletePage();
    logger.info("+++++++++++ Taken to Test complete Page +++++++++++++");
});

