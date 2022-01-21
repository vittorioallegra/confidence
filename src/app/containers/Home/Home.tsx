import React from 'react';
import { Grid } from '@mui/material';
import { InfiniteList, LocationCard, Spinner } from '../../components';
import { useLocation } from '../../contexts';

export const Home: React.FC = () => {
    const { locations, isLoading, loadPage } = useLocation();

    const handleLoadNext = () => {
        console.log('load next');
        loadPage(locations.page + 1);
    };

    return (
        <div className="home">
            {isLoading && <Spinner />}
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
