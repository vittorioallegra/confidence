import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { ILocations, IRestApi } from '../../interfaces';
import * as actions from './app-actions';

function* loadPage(api: IRestApi, action: ActionType<typeof actions.loadPageRequested>) {
    const { page, limit } = action.payload;

    try {
        const locations: ILocations = yield call([api, api.loadPage], page, limit);

        yield put(actions.loadPageSucceeded(page, limit, locations));
    } catch (e) {
        yield put(actions.loadPageFailed(e));
    }
}

export default function* authSaga(api: IRestApi) {
    yield takeLatest(getType(actions.loadPageRequested), loadPage, api);
}
