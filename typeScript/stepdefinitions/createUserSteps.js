// 'use strict';
// import { CreateUserPageObject } from '../pages/createUserPage';
// import { Before, Given, Then, When } from 'cucumber';
// import { ElementFinder, element, by, protractor, ElementArrayFinder, $, browser } from 'protractor';
// const { setDefaultTimeout } = require('cucumber');
// import { ValidatePageObject } from '../pages/validatePage';
// import { config } from '../config/config';
// setDefaultTimeout(60 * 1000);
// let prot = require("protractor");
// let createUser: CreateUserPageObject = new CreateUserPageObject();
// let validate: ValidatePageObject = new ValidatePageObject();
// const log4js = require('../node_modules/log4js');
// const logger = log4js.getLogger("../support/logger.ts");
// Before(() => {
//     createUser = new CreateUserPageObject();
//     validate = new ValidatePageObject();
//     prot.browser.manage().deleteAllCookies();
//     prot.browser.manage().window().maximize();
// });
// Given(/^I have navigated to user demographic page$/, async () => {
//     await createUser.gotoCreateUser();
//     logger.info("########## Given step executed ##########");
// });
// When(/^I enter name '(.*?)' and email '(.*?)'$/, async (name: string, email: string) => {
//     await createUser.enterName(name);
//     // await createUser.delayBrowser(2);
//     await createUser.enterEmail(email);
//     logger.info("@@@@@@@@@@ When step executed @@@@@@@@@@");
// });
// Then(/^I go to next section$/, async (desc: string) => {
//     // await createUser.delayBrowser(2);
//     await createUser.gotoNextSection();
//     logger.info("$$$$$$$$$$$ 1st Then step executed $$$$$$$$$$");
// });
