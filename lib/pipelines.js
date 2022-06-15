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
exports.__esModule = true;
exports.asyncPipeline = exports.pipeline = void 0;
function logAction(functionName, returnData) {
    console.log("\n\t\tReturned from function: ".concat(functionName, "\n\t\n\t\t").concat(JSON.stringify(returnData), "\n\t"));
}
function logError(functionName, error) {
    console.error("\n\t\tError at function: ".concat(functionName, "\n\t\t\n\t\t").concat(JSON.stringify(error), " \n\t"));
}
/**
 * @param { Function[] } functions - the functions to use in the pipeline
 * @param { OptionsProps } options
 * @param { boolean } options.logErrors - show errors on terminal
 * @param { boolean } options.logActions - show returned values from each function
 * @param { any } options.firstArgument - the argument for the first function
 * @returns { Promise<any> } - returns the result of cascade execution
 */
function pipeline(functions, options) {
    var _a = options || {}, logErrors = _a.logErrors, logActions = _a.logActions, firstArgument = _a.firstArgument;
    var returnData = firstArgument;
    for (var functionIndex in functions) {
        var actualFunction = functions[functionIndex];
        var functionName = actualFunction.name;
        try {
            returnData = actualFunction(returnData);
            if (!!logActions)
                logAction(functionName, returnData);
        }
        catch (error) {
            if (!!logErrors)
                logError(functionName, error);
        }
    }
    return returnData;
}
exports.pipeline = pipeline;
/**
 * @param { Function[] } functions - the functions to use in the pipeline
 * @param { OptionsProps } options
 * @param { boolean } options.logErrors - show errors on terminal
 * @param { boolean } options.logActions - show returned values from each function
 * @param { any } options.firstArgument - the argument for the first function
 * @returns { Promise<any> } - returns the result of cascade execution
 */
function asyncPipeline(functions, options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, logErrors, logActions, firstArgument, returnData, _b, _c, _i, functionIndex, actualFunction, functionName, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = options || {}, logErrors = _a.logErrors, logActions = _a.logActions, firstArgument = _a.firstArgument;
                    returnData = firstArgument;
                    _b = [];
                    for (_c in functions)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 6];
                    functionIndex = _b[_i];
                    actualFunction = functions[functionIndex];
                    functionName = actualFunction.name;
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, actualFunction(returnData)];
                case 3:
                    returnData = _d.sent();
                    if (!!logActions)
                        logAction(functionName, returnData);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _d.sent();
                    if (!!logErrors)
                        logError(functionName, error_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, returnData];
            }
        });
    });
}
exports.asyncPipeline = asyncPipeline;
