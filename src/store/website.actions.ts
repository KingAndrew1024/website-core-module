import { createAction, props } from '@ngrx/store';
import { IBusinessFormProps, IWebsiteFormProps } from '../core/contracts/IWebsite.repository';
import { WebsitePageModel } from '../core/models/website.model';

export enum WebsiteActionTypes {
    LoadWebsiteBegin = '[WEBSITE] Load Webiste Begin',
    LoadWebsiteSuccess = '[WEBSITE] Load Webiste Success',
    LoadWebsiteFail = '[WEBSITE] Load Webiste Fail',

    UpdateWebsiteBegin = '[WEBSITE] Update Webiste Begin',
    UpdateWebsiteSuccess = '[WEBSITE] Update Webiste Success',
    UpdateWebsiteFail = '[WEBSITE] Update Webiste Fail',

    UpdateBusinessBegin = '[WEBSITE] Update Business Begin',
    UpdateBusinessSuccess = '[WEBSITE] Update Business Success',
    UpdateBusinessFail = '[WEBSITE] Update Business Fail'
}

export const LoadWebsiteBeginAction = createAction(
    WebsiteActionTypes.LoadWebsiteBegin
);

export const LoadWebsiteSuccessAction = createAction(
    WebsiteActionTypes.LoadWebsiteSuccess,
    props<{ payload: WebsitePageModel }>()
);

export const LoadWebsiteFailAction = createAction(
    WebsiteActionTypes.LoadWebsiteFail,
    props<{ errors: any }>()
);

export const UpdateWebsiteBeginAction = createAction(
    WebsiteActionTypes.UpdateWebsiteBegin,
    props<{ siteId: number, payload: IWebsiteFormProps }>()
);

export const UpdateWebsiteSuccessAction = createAction(
    WebsiteActionTypes.UpdateWebsiteSuccess,
    props<{ payload: WebsitePageModel }>()
);

export const UpdateWebsiteFailAction = createAction(
    WebsiteActionTypes.UpdateWebsiteFail,
    props<{ errors: any }>()
);

export const UpdateBusinessBeginAction = createAction(
    WebsiteActionTypes.UpdateBusinessBegin,
    props<{ siteId: number, payload: IBusinessFormProps }>()
);

export const UpdateBusinessSuccessAction = createAction(
    WebsiteActionTypes.UpdateBusinessSuccess,
    props<{ payload: WebsitePageModel }>()
);

export const UpdateBusinessFailAction = createAction(
    WebsiteActionTypes.UpdateBusinessFail,
    props<{ errors: any }>()
);
