/// <reference types="express" />
import * as express from 'express';
export declare class ApiInfo {
    static getRoute(): string;
    setup(app: express.Application): void;
}
