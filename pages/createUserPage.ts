import { ElementFinder, element, by } from 'protractor';
import { config } from '../config/config';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let prot = require("protractor");
const log4js = require('../node_modules/log4js');
const logger = log4js.getLogger("../support/logger.ts");

export class CreateUserPageObject {

    public nameField: ElementFinder;
    public emailField: ElementFinder;
    public nextSection: ElementFinder;
    public ps4: ElementFinder;
    public nextSection2: ElementFinder;
    public testComplete: ElementFinder;



    constructor() {
        this.nameField = element(by.css("#form-views > div:nth-child(1) > input"));
        this.emailField = element(by.css("#form-views > div:nth-child(2) > input"));
        this.nextSection = element(by.css("#form-views div > a"));
        this.ps4 = element(by.css("#form-views > div:nth-child(2) > div:nth-child(2) > label > input"));
        this.nextSection2 = element(by.css("#form-views > div.form-group.row.ng-scope > div > a"));
        this.testComplete = element(by.css("#form-views > div > h3"));

    };

    async enterName(name: string) {
        await prot.browser.executeScript('arguments[0].click();', this.nameField.getWebElement());
        this.nameField.sendKeys(name);
    }
    async enterEmail(email: string) {
        await prot.browser.executeScript('arguments[0].click();', this.emailField.getWebElement());
        this.emailField.sendKeys(email);
    }

    async gotoNextSection() {
        await this.nextSection.click();
    }

    async selectPS4() {
        await this.ps4.click();

    }
    async gotoCreateUser() {
        await prot.browser.get(config.baseUrl1);
    }

    async delayBrowser(intValue: number) {
        await prot.browser.sleep(intValue * 1000);
    }

    async verifyCompletePage(){
        await this.testComplete.getText().then(function (successMsg) {
            logger.info("################" + successMsg + "################");
            expect(successMsg).to.be.equal("Test Completed, WooHoo!")
        });
        this.testComplete;
    }

}