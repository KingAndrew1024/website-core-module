import { WebsiteModel, WebsitePageModel } from '../core/models/website.model';
import * as fromActions from './website.actions';
import * as fromReducer from './website.reducer';

describe('Website Reducer', () => {
    const initialState  = fromReducer.initialState;

    const thrownError = 'some bad error';

    let state: fromReducer.WebsiteState;

    describe('on unknown action', () => {
        it('Should return the default state', () => {
            const action = { type: 'unknown' };

            const state = fromReducer.websiteReducer(initialState, action);

            expect(state).toEqual(initialState);
        });
    });

    describe('On Begin actions', () => {
        const expectedOnBeginActionsState: fromReducer.WebsiteState = {
            ...initialState,
            error: null,
            success: null,
            isLoading: true,
        };

        const siteId = 123;

        it('should set State.isLoading = true', () => {
            const payload = { } as any;

            const loadWebsiteAction = fromActions.LoadWebsiteBeginAction();
            state = fromReducer.websiteReducer(initialState, loadWebsiteAction);
            expect(state).toEqual(expectedOnBeginActionsState);

            const updateWebsiteAction = fromActions.UpdateWebsiteBeginAction({ siteId, payload });
            state = fromReducer.websiteReducer(initialState, updateWebsiteAction);
            expect(state).toEqual(expectedOnBeginActionsState);

            const updateBusinessAction = fromActions.UpdateBusinessBeginAction({ siteId, payload });
            state = fromReducer.websiteReducer(initialState, updateBusinessAction);
            expect(state).toEqual(expectedOnBeginActionsState);
        });
    });

    describe('On Success actions', () => {
        it('LoadWebsiteSuccessAction should set the expected State.data', () => {

            const expectedPayload = {
                websiteList: [WebsiteModel.empty()]
            } as WebsitePageModel;

            const expectedOnLoadWebsiteState: fromReducer.WebsiteState = {
                ...initialState,
                isLoading: false,
                hasBeenFetched: true,
                data: expectedPayload,
                success: { after: 'GET' }
            };

            const loadWebsiteSuccessAction = fromActions.LoadWebsiteSuccessAction({ payload: expectedPayload });
            state = fromReducer.websiteReducer(initialState, loadWebsiteSuccessAction);
            expect(state).toEqual(expectedOnLoadWebsiteState);
        });

        it('UpdateWebsiteSuccessAction should set the expected State.data', () => {

            const expectedPayload = {
                websiteList: [WebsiteModel.empty()]
            } as WebsitePageModel;

            const expectedOnUpdateWebsiteState: fromReducer.WebsiteState = {
                ...initialState,
                isLoading: false,
                data: expectedPayload,
                success: { after: 'UPDATE' }
            };

            const updateWebsiteSuccessAction = fromActions.UpdateWebsiteSuccessAction({ payload: expectedPayload });
            state = fromReducer.websiteReducer(initialState, updateWebsiteSuccessAction);
            expect(state).toEqual(expectedOnUpdateWebsiteState);
        });

        it('UpdateBusinessSuccessAction should set the expected State.data', () => {

            const expectedPayload = {
                websiteList: [WebsiteModel.empty()]
            } as WebsitePageModel;

            const expectedOnUpdateBusinessState: fromReducer.WebsiteState = {
                ...initialState,
                isLoading: false,
                data: expectedPayload,
                success: { after: 'UPDATE' }
            };

            const updateBusinessSuccessAction = fromActions.UpdateWebsiteSuccessAction({ payload: expectedPayload });
            state = fromReducer.websiteReducer(initialState, updateBusinessSuccessAction);
            expect(state).toEqual(expectedOnUpdateBusinessState);
        });
    });

    describe('On Fail actions', () => {
        it('LoadWebsiteFailAction should set State.error { after: \'GET\', error: any }', () => {

            const expectedFailState: fromReducer.WebsiteState = {
                ...initialState,
                isLoading: false,
                error: { after: 'GET', error: thrownError }
            };

            const loadWebsiteFailAction = fromActions.LoadWebsiteFailAction({ errors: thrownError });
            state = fromReducer.websiteReducer(initialState, loadWebsiteFailAction);
            expect(state).toEqual(expectedFailState);
        });

        it('UpdateWebsiteFailAction should set State.error { after: \'UPDATE\', error: any }', () => {

            const expectedFailState: fromReducer.WebsiteState = {
                ...initialState,
                isLoading: false,
                error: { after: 'UPDATE', error: thrownError }
            };

            const updateWebsiteFailAction = fromActions.UpdateWebsiteFailAction({ errors: thrownError });
            state = fromReducer.websiteReducer(initialState, updateWebsiteFailAction);
            expect(state).toEqual(expectedFailState);
        });

        it('UpdateBusinessFailAction should set State.error { after: \'UPDATE\', error: any }', () => {

            const expectedFailState: fromReducer.WebsiteState = {
                ...initialState,
                isLoading: false,
                error: { after: 'UPDATE', error: thrownError }
            };

            const updateBusinessFailAction = fromActions.UpdateBusinessFailAction({ errors: thrownError });
            state = fromReducer.websiteReducer(initialState, updateBusinessFailAction);
            expect(state).toEqual(expectedFailState);
        });
    });
});
