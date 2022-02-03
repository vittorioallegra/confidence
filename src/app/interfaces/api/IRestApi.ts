import { ILocations } from '..';

export interface IRestApi {
    loadPage: (page: number, limit: number) => Promise<ILocations>;
}
