import { ActionReducer, createReducer, on, Action } from '@ngrx/store';

import * as fromActions from './website.actions';
import { WebsitePageModel } from '../core/models/website.model';
import { IWebsiteStateError, IWebsiteStateSuccess } from '../core/contracts/IStateErrorSuccess';


export interface WebsiteState {
    isLoading: boolean,
    data: WebsitePageModel,
    error: IWebsiteStateError,
    success: IWebsiteStateSuccess
}

export const initialState: WebsiteState = {
    isLoading: false,
    data: WebsitePageModel.empty(),
    error: null,
    success: null
}

const reducer: ActionReducer<WebsiteState> = createReducer(
    initialState,
    //LOAD SECTION
    on(
        fromActions.LoadWebsiteBeginAction,
        fromActions.UpdateWebsiteBeginAction,
        fromActions.UpdateBusinessBeginAction,
        (state): WebsiteState => ({
        ...state,
        error: null,
        success: null,
        isLoading: true,
    })),

    on(
        fromActions.LoadWebsiteFailAction,
        fromActions.UpdateWebsiteFailAction,
        fromActions.UpdateBusinessFailAction,
        (state, action): WebsiteState => ({
        ...state,
        isLoading: false,
        error: { after: getErrorActionType(action.type), error: action.errors }
    })),

    on(fromActions.LoadWebsiteSuccessAction,
        fromActions.UpdateWebsiteSuccessAction,
        fromActions.UpdateBusinessSuccessAction,
        (state, action): WebsiteState => ({
        ...state,
        isLoading: false,
        data: action.payload,
        success: { after: getSuccessActionType(action.type) }
    })),
)

function getErrorActionType(type: fromActions.WebsiteActionTypes) {

    let action: "GET" | "UPDATE" | "UNKNOWN" = "UNKNOWN";

    switch (type) {
        case fromActions.WebsiteActionTypes.LoadWebsiteFail:
            action = "GET"; break;
        case fromActions.WebsiteActionTypes.UpdateWebsiteFail:
        case fromActions.WebsiteActionTypes.UpdateBusinessFail:
            action = "UPDATE"; break;
    }

    return action;
}

function getSuccessActionType(type: fromActions.WebsiteActionTypes) {

    let action: "GET" | "UPDATE" | "UNKNOWN" = "UNKNOWN";

    switch (type) {
        case fromActions.WebsiteActionTypes.LoadWebsiteSuccess:
            action = "GET"; break;
        case fromActions.WebsiteActionTypes.UpdateWebsiteSuccess:
        case fromActions.WebsiteActionTypes.UpdateBusinessSuccess:
            action = "UPDATE"; break;
    }

    return action;
}

export function websiteReducer(state: WebsiteState | undefined, action: Action) {
    return reducer(state, action);
}