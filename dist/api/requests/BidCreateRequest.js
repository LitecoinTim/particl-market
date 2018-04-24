"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RequestBody_1 = require("../../core/api/RequestBody");
const BidMessageType_1 = require("../enums/BidMessageType");
const AddressCreateRequest_1 = require("./AddressCreateRequest");
// tslint:disable:variable-name
class BidCreateRequest extends RequestBody_1.RequestBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], BidCreateRequest.prototype, "listing_item_id", void 0);
tslib_1.__decorate([
    class_validator_1.IsEnum(BidMessageType_1.BidMessageType),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BidCreateRequest.prototype, "action", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", AddressCreateRequest_1.AddressCreateRequest)
], BidCreateRequest.prototype, "address", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BidCreateRequest.prototype, "bidder", void 0);
exports.BidCreateRequest = BidCreateRequest;
// tslint:enable:variable-name
//# sourceMappingURL=BidCreateRequest.js.map