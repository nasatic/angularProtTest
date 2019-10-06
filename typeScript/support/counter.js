"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counterGenerator = /** @class */ (function () {
    function counterGenerator() {
        this.counter = 111111111100;
    }
    counterGenerator.prototype.increment = function () {
        this.counter += 1;
    };
    counterGenerator.prototype.decrement = function () {
        this.counter -= 1;
    };
    return counterGenerator;
}());
exports.counterGenerator = counterGenerator;
