'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var validatePage_1 = require("../pages/validatePage");
var cucumber_1 = require("cucumber");
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(60 * 1000);
var prot = require("protractor");
var login = new validatePage_1.AddUserPageObject();
var log4js = require('../node_modules/log4js');
var logger = log4js.getLogger("../support/logger.ts");
cucumber_1.Before(function () {
    login = new validatePage_1.AddUserPageObject();
    prot.browser.manage().deleteAllCookies();
    prot.browser.manage().window().maximize();
});
cucumber_1.Given(/^I have navigated to user demographic page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login.getBrowser()];
            case 1:
                _a.sent();
                logger.info("########## Given step executed ##########");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^I enter name '(.*?)' and email '(.*?)'$/, function (name, email) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login.delayBrowser(3)];
            case 1:
                _a.sent();
                return [4 /*yield*/, login.enterUserName(name)];
            case 2:
                _a.sent();
                return [4 /*yield*/, login.delayBrowser(2)];
            case 3:
                _a.sent();
                return [4 /*yield*/, login.enterPassword(email)];
            case 4:
                _a.sent();
                logger.info("@@@@@@@@@@ When step executed @@@@@@@@@@");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I enter desctiption '(.*?)'$/, function (desc) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login.delayBrowser(2)];
            case 1:
                _a.sent();
                return [4 /*yield*/, login.enterDesc(desc)];
            case 2:
                _a.sent();
                return [4 /*yield*/, login.delayBrowser(2)];
            case 3:
                _a.sent();
                logger.info("$$$$$$$$$$$ 1st Then step executed $$$$$$$$$$");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I click on login button$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login.ClickOnLogon()];
            case 1:
                _a.sent();
                return [4 /*yield*/, login.delayBrowser(2)];
            case 2:
                _a.sent();
                logger.info("*********** 2nd Then step executed ************");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I am taken to the home page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logger.info("This is user main page xxx");
                return [4 /*yield*/, login.verifyLogonSuccess()];
            case 1:
                _a.sent();
                logger.info("============= 3rd Then step executed ============");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I log out of page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login.delayBrowser(2)];
            case 1:
                _a.sent();
                return [4 /*yield*/, login.ClickOnLogout()];
            case 2:
                _a.sent();
                console.log("&&&&&&&&&&&&&& 4th Then step executed &&&&&&&&&&&&&");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^error is thrown on page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login.delayBrowser(3)];
            case 1:
                _a.sent();
                return [4 /*yield*/, login.verifyLogonError()];
            case 2:
                _a.sent();
                logger.info("++++++++ 5th Then step executed +++++++++");
                logger.warn();
                return [2 /*return*/];
        }
    });
}); });
