import { createAction } from 'typesafe-actions';
import { ILocations } from '../../interfaces';

const LOAD_PAGE_REQUESTED = 'LOAD PAGE REQUESTED';
export const loadPageRequested = createAction(LOAD_PAGE_REQUESTED, (page: number, limit: number) => ({
    page,
    limit,
}))();

const LOAD_PAGE_SUCCEEDED = 'LOAD PAGE SUCCEEDED';
export const loadPageSucceeded = createAction(
    LOAD_PAGE_SUCCEEDED,
    (page: number, limit: number, locations: ILocations) => ({ page, limit, locations }),
)();

const LOAD_PAGE_FAILED = 'LOAD PAGE FAILED';
export const loadPageFailed = createAction(LOAD_PAGE_FAILED, (err: any) => err)();
