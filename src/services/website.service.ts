import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IWebsiteService } from '../core/contracts/IWebsite.service';
import { WebsiteRepository } from '../repositories/website.repository';
import { WebsitePageModel } from '../core/models/website.model';
import { IWebsiteFormProps } from '../core/contracts/IWebsite.repository';

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
                throw error
            })
        );
    }

    updateWebsiteData(siteId: number, payload: IWebsiteFormProps): Observable<WebsitePageModel> {
        return this.repository.updateWebsiteData(siteId, payload).pipe(
            map((response) => {
                return WebsitePageModel.fromApiResponse([{site_id: siteId.toString(), site_data: response.data}]);
            }),
            catchError(error => {
                throw error
            })
        );
    }
}