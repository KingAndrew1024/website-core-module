import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpBasicResponse } from '../core/contracts/IHttpBasicResponse';
import { IBusinessFormProps, IWebsiteApiProps, IWebsiteDataProps, IWebsiteFormProps, IWebsiteRepository } from '../core/contracts/IWebsite.repository';
import { AppSettingsService } from '../providers/global-params';

@Injectable()
export class WebsiteRepository implements IWebsiteRepository {
    readonly BASE_URL = `${this.appSettings.getApiUrl()}/api/${this.appSettings.getInstanceName()}/v1/website`;

    constructor(
        private httpClient: HttpClient,
        private appSettings: AppSettingsService
    ) { }

    getWebsiteData(): Observable<IHttpBasicResponse<Array<IWebsiteApiProps>>> {
        return this.httpClient.get<IHttpBasicResponse<Array<IWebsiteApiProps>>>(`${this.BASE_URL}/sites`);
    }

    updateWebsiteData(siteId: number, payload: IWebsiteFormProps): Observable<IHttpBasicResponse<IWebsiteDataProps>> {
        let params = new HttpParams();
        for (const key in payload) {
            if (payload.hasOwnProperty(key)) {
                params = params.append(key, payload[key]);
            }
        }
        const body = params.toString();

        return this.httpClient.post<IHttpBasicResponse<IWebsiteDataProps>>(`${this.BASE_URL}/update_site/${siteId}`, body);
    }

    updateBusinessData(siteId: number, payload: IBusinessFormProps) {

        const urlSearchParams = new URLSearchParams();

        Object.keys(payload).forEach((key: string) => {
            (typeof payload[key] === 'object') ?
                urlSearchParams.append(key, JSON.stringify(payload[key]))
                :
                urlSearchParams.append(key, payload[key]);
        });

        const body = urlSearchParams.toString();

        return this.httpClient.post<IHttpBasicResponse<IWebsiteDataProps>>(`${this.BASE_URL}/update_business_info/${siteId}`, body);
    }
}
