import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IWebsiteService } from '../core/contracts/IWebsite.service';
import { WebsiteRepository } from '../repositories/website.repository';
import { WebsitePageModel } from '../core/models/website.model';
import { IWebsiteFormProps, IBusinessFormProps, IDeleteImageFormProps } from '../core/contracts/IWebsite.repository';
import { WEBSITE_REPOSITORY } from './identifiers';

@Injectable()
export class WebsiteService implements IWebsiteService {
    constructor(
        @Inject(WEBSITE_REPOSITORY) private repository: WebsiteRepository
    ) { }
    deleteImage(payload: IDeleteImageFormProps) {
        return this.repository.deleteImage(payload).pipe(
            map((response) => {
                return response.data;
            }),
            catchError(error => {
                throw error;
            })
        );
    }

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
                return WebsitePageModel.fromApiResponse([{site_id: siteId.toString(), site_data: response.data}]);
            }),
            catchError(error => {
                throw error;
            })
        );
    }

    updateBusinessData(siteId: number, payload: IBusinessFormProps): Observable<WebsitePageModel> {
        return this.repository.updateBusinessData(siteId, payload).pipe(
            map((response) => {
                return WebsitePageModel.fromApiResponse([{site_id: siteId.toString(), site_data: response.data}]);
            }),
            catchError(error => {
                throw error;
            })
        );
    }
}
