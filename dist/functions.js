"use strict";
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
function sumNum(input) {
    return input;
}
calculateTax(10000, 251);
//# sourceMappingURL=functions.js.map