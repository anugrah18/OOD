"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// You can use a third-party library for async mutex in TypeScript
const async_mutex_1 = require("async-mutex");
class Singleton {
    // Private constructor to prevent external instantiation
    constructor() { }
    // Static method to get the single instance of the class
    static getInstance() {
        return this._mutex.runExclusive(() => __awaiter(this, void 0, void 0, function* () {
            if (!this._instance) {
                this._instance = new Singleton();
            }
            return this._instance;
        }));
    }
    // Override the toString method to print custom content
    toString() {
        return 'I am a Singleton instance!';
    }
}
// Class variable to hold the single instance of the class
Singleton._instance = null;
// Mutex for thread safety
Singleton._mutex = new async_mutex_1.Mutex();
// Example usage
function createSingletonInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        const singletonInstance = yield Singleton.getInstance();
        console.log(`Singleton instance created: ${singletonInstance}`);
    });
}
// Create multiple promises to demonstrate asynchronous usage
const promises = [];
for (let i = 0; i < 5; i++) {
    promises.push(createSingletonInstance());
}
// Wait for all promises to finish
Promise.all(promises).then(() => {
    console.log("All promises completed.");
});
