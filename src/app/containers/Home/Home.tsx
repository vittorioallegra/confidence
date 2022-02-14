import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { InfiniteList, LocationCard, Spinner } from '../../components';
import { IApplicationStore } from '../../interfaces';
import { appActions } from '../../store';
import { DEFAULT_LIST_LIMIT } from '../../config';

export const Home: React.FC = () => {
    const [shouldDisplaySpinner, setDisplaySpinner] = React.useState(true);
    const locations = useSelector((state: IApplicationStore) => state.app.locations);
    const isLoading = useSelector((state: IApplicationStore) => state.app.isLoading);
    const dispatch = useDispatch();

    React.useEffect(() => {
        setDisplaySpinner(true);
        dispatch(appActions.loadPageRequested(0, DEFAULT_LIST_LIMIT));
    }, []);

    const handleLoadNext = () => {
        setDisplaySpinner(false);
        dispatch(appActions.loadPageRequested(locations.page + 1, DEFAULT_LIST_LIMIT));
    };

    return (
        <div className="home">
            {isLoading && shouldDisplaySpinner && <Spinner />}
            <div className="home__header">
                <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
            </div>
            <div className="home__content">
                <InfiniteList
                    hasMore={locations.hasMore}
                    items={locations.items.map((item) => (
                        <Grid key={item.id} item={true} xs={12} md={4}>
                            <LocationCard location={item} />
                        </Grid>
                    ))}
                    loadNext={handleLoadNext}
                />
            </div>
        </div>
    );
};
