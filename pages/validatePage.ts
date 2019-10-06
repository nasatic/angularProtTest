import { equal } from 'assert';
import { ElementFinder, element, by, protractor, ElementArrayFinder, $, browser } from 'protractor';
import { config } from '../config/config';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let prot = require("protractor");
const log4js = require('../node_modules/log4js');
const logger = log4js.getLogger("../support/logger.ts");

export class ValidatePageObject {

    public userField:ElementFinder;
    public passField: ElementFinder;
    public logonButton: ElementFinder;
    public decField: ElementFinder;
    public regLink: ElementFinder;
    public loggedOnMessage: ElementFinder;
    public logoutLink: ElementFinder;
    public logonError: ElementFinder;


    constructor() {
        this.logonError = element(by.css("body div.jumbotron div div.alert.alert-danger.ng-binding.ng-scope"));
        this.logoutLink = element(by.css("body div.jumbotron div > p:nth-child(3) > a"));
        this.regLink = element(by.css("#wrapper > div.container.margin-top-20 li:nth-child(1) > a > figure > img"));
        this.userField = element(by.css('#username'));
        this.passField = element(by.css("#password"));
        this.decField = element(by.xpath("//*[@ng-model='model[options.key]']"));
        this.logonButton = element(by.css("body div.jumbotron div.form-actions > button"));
        this.loggedOnMessage = element(by.css("body div.jumbotron div > p:nth-child(2)"));

    };

    async clickOnRegLink(){
        await prot.browser.executeScript('arguments[0].click();', this.regLink.getWebElement());
        this.regLink;
    }

    async enterUserName(userName: string){
        await prot.browser.executeScript('arguments[0].click();', this.userField.getWebElement());
        this.userField.sendKeys(userName);
    }

    async enterPassword(pword: string){
        prot.browser.executeScript('arguments[0].click();', this.passField.getWebElement());
        await this.passField.sendKeys(pword);
    }

    async enterDesc(desc: string){
        await prot.browser.executeScript('arguments[0].click();', this.decField.getWebElement());
        this.decField.sendKeys(desc);
    }

    async ClickOnLogon(){
        await prot.browser.executeScript('arguments[0].click();', this.logonButton.getWebElement());
        this.logonButton;
    }

    // do not make asynchronous - call as a return function
    async delayBrowser(intValue: number){
        await prot.browser.sleep(intValue * 1000);
    }

    async ClickOnLogout(){
        await prot.browser.executeScript('arguments[0].click();', this.logoutLink.getWebElement());
        this.logoutLink;
    }


    async verifyLogonSuccess(){
        await this.loggedOnMessage.getText().then(function (logonMsg) {
            logger.info("################## Success Msg:" + logonMsg +"##################");
            expect(logonMsg).to.be.equal("You're logged in!!")
        });
        this.loggedOnMessage;
    }

    
    async verifyLogonError(){
         await this.logonError.getText().then(function (logonErrMsg) {
            console.log("************* Logon error Msg:" + logonErrMsg);
            expect(logonErrMsg).to.be.equal("Username or password is incorrect")
        });
        this.logonError;
    }

    async getBrowser(){
        await prot.browser.get(config.baseUrl);  
    }
}