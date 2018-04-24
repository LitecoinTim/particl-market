"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RequestBody_1 = require("../../core/api/RequestBody");
// tslint:disable:variable-name
class ItemImageCreateRequest extends RequestBody_1.RequestBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], ItemImageCreateRequest.prototype, "item_information_id", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Object)
], ItemImageCreateRequest.prototype, "data", void 0);
exports.ItemImageCreateRequest = ItemImageCreateRequest;
// tslint:enable:variable-name
//# sourceMappingURL=ItemImageCreateRequest.js.map