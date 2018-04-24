"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RequestBody_1 = require("../../core/api/RequestBody");
const ShippingAvailability_1 = require("../../api/enums/ShippingAvailability");
// tslint:disable:variable-name
class ShippingDestinationSearchParams extends RequestBody_1.RequestBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], ShippingDestinationSearchParams.prototype, "item_information_id", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], ShippingDestinationSearchParams.prototype, "country", void 0);
tslib_1.__decorate([
    class_validator_1.IsEnum(ShippingAvailability_1.ShippingAvailability),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], ShippingDestinationSearchParams.prototype, "shippingAvailability", void 0);
exports.ShippingDestinationSearchParams = ShippingDestinationSearchParams;
// tslint:enable:variable-name
//# sourceMappingURL=ShippingDestinationSearchParams.js.map