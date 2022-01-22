import React from 'react';
import { RestApi } from '../api';
import { ILocationList } from '../interfaces';
import { createUseFunction } from '../utils';

interface ILocationContext {
    locations: ILocationList;
    loadPage: (page: number) => Promise<void>;
}

export const LocationContext = React.createContext<null | ILocationContext>(null);
LocationContext.displayName = 'Location Context';

export const LocationProvider: React.FC = ({ children }) => {
    const restApi = new RestApi();
    const listLimit = 3;

    const [locations, setLocation] = React.useState<ILocationList>({
        hasMore: false,
        page: 0,
        items: [],
    });

    const loadPage = async (page: number) => {
        try {
            const result = await restApi.loadPage(page, listLimit);
            setLocation({
                hasMore: result.locations.length === listLimit,
                page,
                items: [...locations.items, ...result.locations],
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <LocationContext.Provider
            value={{
                locations,
                loadPage,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = createUseFunction<ILocationContext>(LocationContext);
