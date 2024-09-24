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
const index_1 = require("./index");
class CodeExecutionTimerEx extends index_1.default {
    printEntries(logQueue) {
        console.log('override here');
        console.log(logQueue);
    }
}
function delay(ms = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
function process() {
    return __awaiter(this, void 0, void 0, function* () {
        const timer = new CodeExecutionTimerEx("Test");
        // Run step 1
        yield delay(1000);
        timer.log("step 1 done");
        // Run step 2
        yield delay(2000);
        timer.log("step 2 done");
        timer.complete(true);
    });
}
process();
