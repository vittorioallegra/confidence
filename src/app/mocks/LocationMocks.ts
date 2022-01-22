import { ILocation, ILocationAddress, ILocationList, ILocations } from '../interfaces';

export const mockLocationAddress: ILocationAddress = {
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zip: 'zip',
};

export const mockLocation: ILocation = {
    id: 0,
    locationId: 'locationId',
    locationName: 'locationName',
    locationDetails: 'locationDetails',
    locationType: 'locationType',
    description: 'description',
    numberofDevices: 0,
    address: mockLocationAddress,
    locationUserRole: 'locationUserRole',
    active: false,
    newLocation: false,
    subscriptionActive: false,
    longitude: 0,
    latitude: 0,
};

export const mockLocations: ILocations = {
    locations: [mockLocation],
    numberOfLocations: 1,
};

export const mockLocationList: ILocationList = {
    hasMore: false,
    page: 0,
    items: [mockLocation],
};
