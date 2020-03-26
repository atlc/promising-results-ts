// Iterates through all the slowMath instructions using Promise/then, placing the output in the console.
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
slowMath.add(6, 2)
    .then(function (res) {
    console.log("The result of adding the first two values is: " + res);
    return slowMath.multiply(res, 2);
})
    .then(function (res) {
    console.log("The result of multiplying is " + res);
    return slowMath.divide(res, 4);
})
    .then(function (res) {
    console.log("The result of dividing is " + res);
    return slowMath.subtract(res, 3);
})
    .then(function (res) {
    console.log("The result of subtracting is " + res);
    return slowMath.add(res, 98);
})
    .then(function (res) {
    console.log("The sum of adding is " + res);
    return slowMath.remainder(res, 2);
})
    .then(function (res) {
    console.log("The remainder of dividing is " + res);
    return slowMath.multiply(res, 50);
})
    .then(function (res) {
    console.log("The product of multiplying is " + res);
    return slowMath.remainder(res, 40);
})
    .then(function (res) {
    console.log("The remainder after dividing is " + res);
    return slowMath.add(res, 32);
})
    .then(function (res) { return console.log("%cThe final result is: " + res, 'background-color: black; color: white; font-weight: bold'); })["catch"](function (err) { return console.error("An error has occured.\n" + err); });
// Iterates through the slowMath instructions, using async/await. Places output in a Swal modal, where exiting is disabled until
//   the doMath() function successfully finishes
function doMath() {
    return __awaiter(this, void 0, void 0, function () {
        var num, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 10, , 11]);
                    return [4 /*yield*/, slowMath.add(1, 2)];
                case 1:
                    num = _a.sent();
                    updateResults("The result of adding the first two values is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.multiply(num, 2)];
                case 2:
                    num = _a.sent();
                    updateResults("The result after multiplying is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.divide(num, 4)];
                case 3:
                    num = _a.sent();
                    updateResults("The result after dividing is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.subtract(num, 3)];
                case 4:
                    num = _a.sent();
                    updateResults("The result after subtracting is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.add(num, 98)];
                case 5:
                    num = _a.sent();
                    updateResults("The sum after adding is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.remainder(num, 2)];
                case 6:
                    num = _a.sent();
                    updateResults("The remainder after dividing is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.multiply(num, 50)];
                case 7:
                    num = _a.sent();
                    updateResults("The product after multiplying is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.remainder(num, 40)];
                case 8:
                    num = _a.sent();
                    updateResults("The remainder after dividing is: <b>" + num + "</b>");
                    return [4 /*yield*/, slowMath.add(num, 32)];
                case 9:
                    num = _a.sent();
                    updateResults("The final result is: <b style=\"font-size: 1.5em\">" + num + "</b>");
                    finishUpdates();
                    return [3 /*break*/, 11];
                case 10:
                    err_1 = _a.sent();
                    finishUpdates();
                    Swal.fire({
                        icon: 'error',
                        title: 'Uh oh!',
                        text: err_1
                    });
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
doMath();
var resultsContent = '';
var mathResultsModal = Swal.fire({
    title: 'slowMath results',
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false
});
function updateResults(result) {
    Swal.hideLoading();
    resultsContent += "<br />" + result;
    Swal.update({ html: resultsContent });
    Swal.showLoading();
}
function finishUpdates() {
    Swal.hideLoading();
    mathResultsModal.update({
        icon: 'success',
        allowOutsideClick: true,
        allowEscapeKey: true
    });
}
