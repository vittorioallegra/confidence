import { ILocationList } from '../..';

export interface IAppStore {
    locations: ILocationList;

    isLoading: boolean;
    hasError: boolean;
}
