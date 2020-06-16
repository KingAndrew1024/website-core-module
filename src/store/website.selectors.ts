import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromReducer from './website.reducer';


export const getWebsiteState = createFeatureSelector<fromReducer.WebsiteState>('website');

export const getWebsitePageState = createSelector(
    getWebsiteState,
    state => state
)

const _getIsLoading = (state: fromReducer.WebsiteState) => state.isLoading;

const _getWebsiteData = (state: fromReducer.WebsiteState) => state.data

export const getIsLoading = createSelector(
    getWebsitePageState,
    _getIsLoading
)

export const getError = createSelector(
    getWebsitePageState,
    state => state.error
)

export const getSuccess = createSelector(
    getWebsitePageState,
    state => state.success
)

export const getWebsiteData = createSelector(
    getWebsitePageState,
    _getWebsiteData
)