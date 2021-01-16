import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHttpBasicResponse } from '../contracts/IHttpBasicResponse';
import {
    IBusinessFormProps,
    IDeleteImageFormProps,
    IDeleteImageResponse,
    IWebsiteApiProps,
    IWebsiteDataProps,
    IWebsiteFormProps,
    IWebsiteRepository
} from '../contracts/IWebsite.repository';
import { TEST_SITES_LIST_API_DATA } from './website.data.mock';

@Injectable()
export class MockWebsiteRepository implements IWebsiteRepository {

    readonly responseError: IHttpBasicResponse<null> = {
        status: 'error',
        message: 'Some bad error!',
        statusCode: 500
    };

    getWebsiteData(): Observable<IHttpBasicResponse<IWebsiteApiProps[]>> {
        const data = TEST_SITES_LIST_API_DATA as any;

        const responseOk: IHttpBasicResponse<IWebsiteApiProps[]> = {
            data,
            status: 'success'
        };

        return of(responseOk);
    }
    deleteImage(payload: IDeleteImageFormProps): Observable<IHttpBasicResponse<IDeleteImageResponse>> {
        const data = {
            img: 'string',
            msj: ''
        } as any;

        const responseOk: IHttpBasicResponse<IDeleteImageResponse> = {
            data,
            status: 'success'
        };

        return of(responseOk);
    }
    updateWebsiteData(siteId: number, payload: IWebsiteFormProps): Observable<IHttpBasicResponse<IWebsiteDataProps>> {
        const data = {
            ...TEST_SITES_LIST_API_DATA[0].site_data,
            ...payload
        };

        const responseOk: IHttpBasicResponse<any> = {
            data,
            status: 'success'
        };

        return of(responseOk);
    }
    updateBusinessData(siteId: number, payload: IBusinessFormProps): Observable<IHttpBasicResponse<IWebsiteDataProps>> {
        const data = {
            ...TEST_SITES_LIST_API_DATA[0].site_data,
            ...payload
        };

        const responseOk: IHttpBasicResponse<any> = {
            data,
            status: 'success'
        };

        return of(responseOk);
    }

    getUploadImagesUrl(): string {
        return '';
    }

}
