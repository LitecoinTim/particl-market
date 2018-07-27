import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';
import { ActionMessageCreateRequest } from './ActionMessageCreateRequest';

// tslint:disable:variable-name
export class ListingItemCreateRequest extends RequestBody {

    public hash: string;

    @IsNotEmpty()
    public seller: string;

    @IsNotEmpty()
    public market_id: number;

    public listing_item_template_id: number;

    // in days
    public expiryTime: number;

    public postedAt: Date;
    public expiredAt: Date;

    public itemInformation;
    public paymentInformation;
    public messagingInformation;
    public listingItemObjects;

    // used only to create testdata
    public actionMessages;
}
// tslint:enable:variable-name
