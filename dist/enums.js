"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 5] = "Small";
    Size[Size["medium"] = 6] = "medium";
    Size[Size["large"] = 7] = "large";
})(Size || (Size = {}));
let mySize = Size.Small;
let something = Size.medium;
//# sourceMappingURL=enums.js.map