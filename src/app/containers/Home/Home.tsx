import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';
import { InfiniteList, LocationCard, Spinner } from '../../components';
import { IApplicationStore, ILocationList } from '../../interfaces';
import { appActions } from '../../store';
import { DEFAULT_LIST_LIMIT } from '../../config';

interface IActionProps {
    loadPage: typeof appActions.loadPageRequested;
}

interface IStoreProps {
    locations: ILocationList;
    isLoading: boolean;
    hasError: boolean;
}

type IProps = IActionProps & IStoreProps;

const Home: React.FC<IProps> = (props) => {
    const [shouldDisplaySpinner, setDisplaySpinner] = React.useState(true);

    React.useEffect(() => {
        setDisplaySpinner(true);
        props.loadPage(0, DEFAULT_LIST_LIMIT);
    }, []);

    const handleLoadNext = () => {
        setDisplaySpinner(false);
        props.loadPage(props.locations.page + 1, DEFAULT_LIST_LIMIT);
    };

    return (
        <div className="home">
            {props.isLoading && shouldDisplaySpinner && <Spinner />}
            <div className="home__header">
                <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
            </div>
            <div className="home__content">
                <InfiniteList
                    hasMore={props.locations.hasMore}
                    items={props.locations.items.map((item) => (
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

const actions: IActionProps = {
    loadPage: appActions.loadPageRequested,
};

const mapStateToProps = (state: IApplicationStore): IStoreProps => ({
    locations: state.app.locations,
    isLoading: state.app.isLoading,
    hasError: state.app.hasError,
});

export default connect(mapStateToProps, actions)(Home);
