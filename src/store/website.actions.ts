import { createAction, props } from '@ngrx/store'

import { WebsitePageModel } from '../core/models/website.model'

export enum WebsiteActionTypes{
    LoadWebsiteBegin = "[WEBSITE] Load Webiste Begin",
    LoadWebsiteSuccess = "[WEBSITE] Load Webiste Success",
    LoadWebsiteFail = "[WEBSITE] Load Webiste Fail",

    UpdateWebsiteBegin = "[WEBSITE] Update Webiste Begin",
    UpdateWebsiteSuccess = "[WEBSITE] Update Webiste Success",
    UpdateWebsiteFail = "[WEBSITE] Update Webiste Fail",
}

export const LoadWebsiteBeginAction = createAction(
    WebsiteActionTypes.LoadWebsiteBegin
)

export const LoadWebsiteSuccessAction = createAction(
    WebsiteActionTypes.LoadWebsiteSuccess,
    props<{ payload: WebsitePageModel }>()
)

export const LoadWebsiteFailAction  = createAction(
    WebsiteActionTypes.LoadWebsiteFail,
    props<{ errors: any }>()
)

export const UpdateWebsiteBeginAction = createAction(
    WebsiteActionTypes.UpdateWebsiteBegin,
    props<{ siteId: number, payload: any }>()
)

export const UpdateWebsiteSuccessAction = createAction(
    WebsiteActionTypes.UpdateWebsiteSuccess,
    props<{ payload: WebsitePageModel }>()
)

export const UpdateWebsiteFailAction  = createAction(
    WebsiteActionTypes.UpdateWebsiteFail,
    props<{ errors: any }>()
)