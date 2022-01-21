import { IPagination } from './IPagination';

export interface ILocationAddress {
    readonly addressLine1: string;
    readonly addressLine2: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
}

export interface ILocation {
    readonly id: number;
    readonly locationId: string;
    readonly locationName: string;
    readonly locationDetails: string;
    readonly locationType: string;
    readonly numberofDevices: number;
    readonly address: ILocationAddress;
    readonly locationUserRole: string;
    readonly active: boolean;
    readonly newLocation: boolean;
    readonly subscriptionActive: boolean;
    readonly longitude: number;
    readonly latitude: number;
}

export interface ILocations {
    readonly locations: ILocation[];
    readonly numberOfLocations: number;
}

export type ILocationList = IPagination<ILocation>;
