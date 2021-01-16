import { createAction, props } from '@ngrx/store';

import { WebsitePageModel } from '../core/models/website.model';
import { IWebsiteFormProps, IBusinessFormProps, IDeleteImageFormProps } from '../core/contracts/IWebsite.repository';

export enum WebsiteActionTypes{
    LoadWebsiteBegin = '[WEBSITE] Load Webiste Begin',
    LoadWebsiteSuccess = '[WEBSITE] Load Webiste Success',
    LoadWebsiteFail = '[WEBSITE] Load Webiste Fail',

    UpdateWebsiteBegin = '[WEBSITE] Update Webiste Begin',
    UpdateWebsiteSuccess = '[WEBSITE] Update Webiste Success',
    UpdateWebsiteFail = '[WEBSITE] Update Webiste Fail',

    UpdateBusinessBegin = '[WEBSITE] Update Business Begin',
    UpdateBusinessSuccess = '[WEBSITE] Update Business Success',
    UpdateBusinessFail = '[WEBSITE] Update Business Fail',


    DeleteImageBegin = '[WEBSITE] Delete Image Begin',
    DeleteImageSuccess = '[WEBSITE] Delete Image Success',
    DeleteImageFail = '[WEBSITE] Delete Image Fail'
}

export const LoadWebsiteBeginAction = createAction(
    WebsiteActionTypes.LoadWebsiteBegin
);

export const LoadWebsiteSuccessAction = createAction(
    WebsiteActionTypes.LoadWebsiteSuccess,
    props<{ payload: WebsitePageModel }>()
);

export const LoadWebsiteFailAction  = createAction(
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

export const UpdateWebsiteFailAction  = createAction(
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

export const UpdateBusinessFailAction  = createAction(
    WebsiteActionTypes.UpdateBusinessFail,
    props<{ errors: any }>()
);
// -------------------- Image section -----------------
export const DeleteImageBeginAction = createAction(
    WebsiteActionTypes.DeleteImageBegin,
    props<{ payload: IDeleteImageFormProps }>()
);

export const DeleteImageSuccessAction = createAction(
    WebsiteActionTypes.DeleteImageSuccess,
    props<{ response: any }>()
);

export const DeleteImageFailAction  = createAction(
    WebsiteActionTypes.DeleteImageFail,
    props<{ errors: any }>()
);
