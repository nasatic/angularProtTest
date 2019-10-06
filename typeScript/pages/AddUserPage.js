"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var config_1 = require("../config/config");
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var prot = require("protractor");
var log4js = require('../node_modules/log4js');
var logger = log4js.getLogger("../support/logger.ts");
var AddUserPageObject = /** @class */ (function () {
    function AddUserPageObject() {
        this.logonError = protractor_1.element(protractor_1.by.css("body div.jumbotron div div.alert.alert-danger.ng-binding.ng-scope"));
        this.logoutLink = protractor_1.element(protractor_1.by.css("body div.jumbotron div > p:nth-child(3) > a"));
        this.regLink = protractor_1.element(protractor_1.by.css("#wrapper > div.container.margin-top-20 li:nth-child(1) > a > figure > img"));
        this.userField = protractor_1.element(protractor_1.by.css('#username'));
        this.passField = protractor_1.element(protractor_1.by.css("#password"));
        this.decField = protractor_1.element(protractor_1.by.xpath("//*[@ng-model='model[options.key]']"));
        this.logonButton = protractor_1.element(protractor_1.by.css("body div.jumbotron div.form-actions > button"));
        this.loggedOnMessage = protractor_1.element(protractor_1.by.css("body div.jumbotron div > p:nth-child(2)"));
    }
    ;
    AddUserPageObject.prototype.clickOnRegLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.executeScript('arguments[0].click();', this.regLink.getWebElement())];
                    case 1:
                        _a.sent();
                        this.regLink;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.enterUserName = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.executeScript('arguments[0].click();', this.userField.getWebElement())];
                    case 1:
                        _a.sent();
                        this.userField.sendKeys(userName);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.enterPassword = function (pword) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prot.browser.executeScript('arguments[0].click();', this.passField.getWebElement());
                        return [4 /*yield*/, this.passField.sendKeys(pword)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.enterDesc = function (desc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.executeScript('arguments[0].click();', this.decField.getWebElement())];
                    case 1:
                        _a.sent();
                        this.decField.sendKeys(desc);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.ClickOnLogon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.executeScript('arguments[0].click();', this.logonButton.getWebElement())];
                    case 1:
                        _a.sent();
                        this.logonButton;
                        return [2 /*return*/];
                }
            });
        });
    };
    // do not make asynchronous - call as a return function
    AddUserPageObject.prototype.delayBrowser = function (intValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.sleep(intValue * 1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.ClickOnLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.executeScript('arguments[0].click();', this.logoutLink.getWebElement())];
                    case 1:
                        _a.sent();
                        this.logoutLink;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.verifyLogonSuccess = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loggedOnMessage.getText().then(function (logonMsg) {
                            logger.info("################## Success Msg:" + logonMsg + "##################");
                            expect(logonMsg).to.be.equal("You're logged in!!");
                        })];
                    case 1:
                        _a.sent();
                        this.loggedOnMessage;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.verifyLogonError = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logonError.getText().then(function (logonErrMsg) {
                            console.log("************* Logon error Msg:" + logonErrMsg);
                            expect(logonErrMsg).to.be.equal("Username or password is incorrect");
                        })];
                    case 1:
                        _a.sent();
                        this.logonError;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserPageObject.prototype.getBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prot.browser.get(config_1.config.baseUrl)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AddUserPageObject;
}());
exports.AddUserPageObject = AddUserPageObject;
