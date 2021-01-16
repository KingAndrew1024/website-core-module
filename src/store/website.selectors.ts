import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromReducer from './website.reducer';


export const getWebsiteState = createFeatureSelector<fromReducer.WebsiteState>('website');

export const getWebsitePageState = createSelector(
    getWebsiteState,
    state => state
);

export const stateGetIsLoading = (state: fromReducer.WebsiteState) => state.isLoading;
export const stateGetIsLoadingImages = (state: fromReducer.WebsiteState) => state.isLoadingImages;

export const stateGetWebsiteData = (state: fromReducer.WebsiteState) => state.data;

export const getIsLoading = createSelector(
    getWebsitePageState,
    stateGetIsLoading
);

export const getIsLoadingImages = createSelector(
    getWebsitePageState,
    stateGetIsLoadingImages
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
