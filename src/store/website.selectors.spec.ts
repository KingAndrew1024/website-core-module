import { IWebsiteStateError, IWebsiteStateSuccess } from '../core/contracts/IStateErrorSuccess';
import { WebsitePageModel } from '../core/models/website.model';
import * as fromReducer from './website.reducer';
import {
    getError,
    getIsLoading,
    getSuccess,
    getWebsiteData,
    hasBeenFetched,
    stateGetIsLoading,
    stateGetWebsiteData,
} from './website.selectors';

describe('Website Selectors', () => {
    const expectedIsLoading = true;
    const expectedWebsiteData = WebsitePageModel.empty();
    const expectedHasBeenFetched = true;
    const expectedFakeError: IWebsiteStateError = { after: 'UNKNOWN', error: 'some fake error' };
    const expectedSuccess: IWebsiteStateSuccess = { after: 'GET' };

    const state: fromReducer.WebsiteState = {
        ...fromReducer.initialState,
        isLoading: expectedIsLoading,
        data: expectedWebsiteData,
        hasBeenFetched: expectedHasBeenFetched,
        error: expectedFakeError,
        success: expectedSuccess
    };

    const appState = { website: state };

    it('stateGetIsLoading retrieve state.isLoading value', () => {
        expect(stateGetIsLoading(state)).toBe(expectedIsLoading);
    });

    it('stateGetWebsiteData retrieve state.isLoading value', () => {
        expect(stateGetWebsiteData(state)).toBe(expectedWebsiteData);
    });

    it('getIsLoading retrieve state.isLoading value', () => {
        expect(getIsLoading(appState)).toBe(expectedIsLoading);
    });

    it('getError retrieve state.error value', () => {
        expect(getError(appState)).toBe(expectedFakeError);
    });

    it('getSuccess retrieve state.success value', () => {
        expect(getSuccess(appState)).toBe(expectedSuccess);
    });

    it('getWebsiteData retrieve state.success value', () => {
        expect(getWebsiteData(appState)).toBe(expectedWebsiteData);
    });

    it('hasBeenFetched retrieve state.hasBeenFetched value', () => {
        expect(hasBeenFetched(appState)).toBe(expectedHasBeenFetched);
    });
});
