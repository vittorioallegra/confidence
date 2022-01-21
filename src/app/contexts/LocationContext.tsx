import React from 'react';
import { RestApi } from '../api';
import { ILocationList } from '../interfaces';
import { createUseFunction } from '../utils';

interface ILocationContext {
    locations: ILocationList;
    isLoading: boolean;
    loadPage: (page: number) => void;
}

const LocationContext = React.createContext<null | ILocationContext>(null);
LocationContext.displayName = 'Location Context';

export const LocationProvider: React.FC = ({ children }) => {
    const restApi = new RestApi();

    const [isLoading, setLoading] = React.useState(true);
    const [locations, setLocation] = React.useState<ILocationList>({
        hasMore: false,
        page: 0,
        items: [],
    });

    React.useEffect(() => {
        loadPage(0);
    }, []);

    const loadPage = (page: number) => {
        restApi.loadPage(page).then(
            (result) => {
                setLoading(false);
                setLocation({
                    ...result,
                    items: [...locations.items, ...result.items],
                });
            },
            (error) => {
                console.error(error);
                setLoading(false);
            },
        );
    };

    return (
        <LocationContext.Provider
            value={{
                locations,
                isLoading,
                loadPage,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = createUseFunction<ILocationContext>(LocationContext);
