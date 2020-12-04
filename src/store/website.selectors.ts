import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './website.reducer';

export const getWebsiteState = createFeatureSelector<fromReducer.WebsiteState>('website');

export const getWebsitePageState = createSelector(
    getWebsiteState,
    state => state
);

const stateGetIsLoading = (state: fromReducer.WebsiteState) => state.isLoading;

const stateGetWebsiteData = (state: fromReducer.WebsiteState) => state.data;

export const getIsLoading = createSelector(
    getWebsitePageState,
    stateGetIsLoading
);

export const getError = createSelector(
    getWebsitePageState,
    state => state.error
);

export const getSuccess = createSelector(
    getWebsitePageState,
    state => state.success
);

export const getWebsiteData = createSelector(
    getWebsitePageState,
    stateGetWebsiteData
);

export const hasBeenFetched = createSelector(
    getWebsitePageState,
    state => state.hasBeenFetched
);
