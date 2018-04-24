import { Logger as LoggerType } from '../../../core/Logger';
import { TestDataService } from '../../services/TestDataService';
import { RpcRequest } from '../../requests/RpcRequest';
import { RpcCommandInterface } from '../RpcCommandInterface';
import { BaseCommand } from '../BaseCommand';
export declare class DataGenerateCommand extends BaseCommand implements RpcCommandInterface<any> {
    Logger: typeof LoggerType;
    private testDataService;
    log: LoggerType;
    constructor(Logger: typeof LoggerType, testDataService: TestDataService);
    /**
     * data.params[]:
     *  [0]: CreatableModel, model to generate
     *  [1]: amount
     *  [2]: withRelated, return full objects or just id's
     *  [3...]: generateParams
     *
     * @param {RpcRequest} data
     * @returns {Promise<any>}
     */
    execute(data: RpcRequest): Promise<any>;
    usage(): string;
    help(): string;
    description(): string;
    example(): string;
}
