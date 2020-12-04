import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBusinessFormProps, IWebsiteFormProps } from '../core/contracts/IWebsite.repository';
import { IWebsiteService } from '../core/contracts/IWebsite.service';
import { WebsitePageModel } from '../core/models/website.model';
import { WebsiteRepository } from '../repositories/website.repository';

@Injectable()
export class WebsiteService implements IWebsiteService {
    constructor(
        private repository: WebsiteRepository
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
