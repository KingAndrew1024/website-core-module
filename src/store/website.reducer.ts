import { ActionReducer, createReducer, on, Action } from '@ngrx/store';

import * as fromActions from './website.actions';
import { WebsitePageModel } from '../core/models/website.model';
import { IWebsiteStateError, IWebsiteStateSuccess } from '../core/contracts/IStateErrorSuccess';


export interface WebsiteState {
    isLoading: boolean;
    isLoadingImages: boolean;
    data: WebsitePageModel;
    hasBeenFetched: boolean;
    error: IWebsiteStateError;
    success: IWebsiteStateSuccess;
}

export const initialState: WebsiteState = {
    isLoading: false,
    isLoadingImages: false,
    data: WebsitePageModel.empty(),
    hasBeenFetched: false,
    error: null,
    success: null
};

const reducer: ActionReducer<WebsiteState> = createReducer(
    initialState,
    // LOAD SECTION
    on(
        fromActions.LoadWebsiteBeginAction,
        fromActions.UpdateWebsiteBeginAction,
        fromActions.UpdateBusinessBeginAction,
        fromActions.DeleteImageBeginAction,
        (state, action): WebsiteState => ({
        ...state,
        error: null,
        success: null,
        isLoading: action.type !== fromActions.WebsiteActionTypes.DeleteImageBegin ? true : false,
        isLoadingImages: action.type === fromActions.WebsiteActionTypes.DeleteImageBegin ? true : false
    })),

    on(
        fromActions.LoadWebsiteFailAction,
        fromActions.UpdateWebsiteFailAction,
        fromActions.UpdateBusinessFailAction,
        fromActions.DeleteImageFailAction,
        (state, action): WebsiteState => ({
        ...state,
        isLoading: false,
        isLoadingImages: false,
        error: { after: getErrorActionType(action.type), error: action.errors }
    })),

    on(fromActions.LoadWebsiteSuccessAction,
        (state, action): WebsiteState => ({
        ...state,
        isLoading: false,
        hasBeenFetched: true,
        data: action.payload,
        success: { after: getSuccessActionType(action.type) }
    })),

    on(fromActions.DeleteImageSuccessAction,
        (state, action): WebsiteState => ({
        ...state,
        isLoadingImages: false,
        success: { after: getSuccessActionType(action.type) }
    })),

    on(fromActions.UpdateWebsiteSuccessAction,
        fromActions.UpdateBusinessSuccessAction,
        (state, action): WebsiteState => ({
        ...state,
        isLoading: false,
        data: action.payload,
        success: { after: getSuccessActionType(action.type) }
    })),
);

function getErrorActionType(type: fromActions.WebsiteActionTypes) {

    let action: 'GET' | 'UPDATE' | 'UPLOAD_IMAGE' | 'DELETE_IMAGE' | 'UNKNOWN';

    switch (type) {
        case fromActions.WebsiteActionTypes.LoadWebsiteFail:
            action = 'GET'; break;
        case fromActions.WebsiteActionTypes.UpdateWebsiteFail:
        case fromActions.WebsiteActionTypes.UpdateBusinessFail:
            action = 'UPDATE'; break;
        case fromActions.WebsiteActionTypes.DeleteImageFail:
            action = 'DELETE_IMAGE'; break;
    }

    return action;
}

function getSuccessActionType(type: fromActions.WebsiteActionTypes) {

    let action: 'GET' | 'UPDATE' | 'UPLOAD_IMAGE' | 'DELETE_IMAGE' | 'UNKNOWN';

    switch (type) {
        case fromActions.WebsiteActionTypes.LoadWebsiteSuccess:
            action = 'GET'; break;
        case fromActions.WebsiteActionTypes.UpdateWebsiteSuccess:
        case fromActions.WebsiteActionTypes.UpdateBusinessSuccess:
            action = 'UPDATE'; break;
        case fromActions.WebsiteActionTypes.DeleteImageSuccess:
            action = 'DELETE_IMAGE'; break;
    }

    return action;
}

export function websiteReducer(state: WebsiteState | undefined, action: Action) {
    return reducer(state, action);
}


export interface AppState {
    website: WebsiteState;
}
