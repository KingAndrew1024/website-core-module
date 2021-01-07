import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBusinessFormProps, IWebsiteFormProps, IWebsiteRepository } from '../core/contracts/IWebsite.repository';
import { IWebsiteService } from '../core/contracts/IWebsite.service';
import { WebsitePageModel } from '../core/models/website.model';
import { WEBSITE_REPOSITORY } from './identifiers';

@Injectable()
export class WebsiteService implements IWebsiteService {
    constructor(
        @Inject(WEBSITE_REPOSITORY) private repository: IWebsiteRepository
    ) { }

    getWebsiteData(): Observable<WebsitePageModel> {
        return this.repository.getWebsiteData().pipe(
            map((response) => {
                return WebsitePageModel.fromApiResponse(response.data);
            }),
            catchError(error => {
                throw error;
            })
        );
    }

    updateWebsiteData(siteId: number, payload: IWebsiteFormProps): Observable<WebsitePageModel> {
        return this.repository.updateWebsiteData(siteId, payload).pipe(
            map((response) => {
                return WebsitePageModel.fromApiResponse([{ site_id: siteId.toString(), site_data: response.data }]);
            }),
            catchError(error => {
                throw error;
            })
        );
    }

    updateBusinessData(siteId: number, payload: IBusinessFormProps): Observable<WebsitePageModel> {
        return this.repository.updateBusinessData(siteId, payload).pipe(
            map((response) => {
                return WebsitePageModel.fromApiResponse([{ site_id: siteId.toString(), site_data: response.data }]);
            }),
            catchError(error => {
                throw error;
            })
        );
    }
}
