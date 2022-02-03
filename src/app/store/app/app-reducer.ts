import { ActionType, getType } from 'typesafe-actions';
import { IAppStore, ILocationList } from '../../interfaces';
import * as actions from './app-actions';

const initialLocations: ILocationList = {
    hasMore: false,
    page: 0,
    items: [],
};

const initialState: IAppStore = {
    locations: initialLocations,
    isLoading: false,
    hasError: false,
};

// eslint-disable-next-line
export default function appReducer(state: IAppStore = initialState, action: ActionType<typeof actions>) {
    switch (action.type) {
        case getType(actions.loadPageRequested):
            return { ...state, isLoading: true, hasError: false };
        case getType(actions.loadPageSucceeded):
            return {
                ...state,
                isLoading: false,
                hasError: false,
                locations: {
                    hasMore: action.payload.locations.locations.length === action.payload.limit,
                    page: action.payload.page,
                    items: [...state.locations.items, ...action.payload.locations.locations],
                },
            };
        case getType(actions.loadPageFailed):
            return { ...state, isLoading: false, hasError: true, isLoggedIn: false };
        default:
            return state;
    }
}
