import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IWebsiteRepository, IWebsiteApiProps, IWebsiteDataProps } from '../core/contracts/IWebsite.repository';
import { IHttpBasicResponse } from '../core/contracts/IHttpBasicResponse';
import { AppSettingsService } from '../providers/global-params';


@Injectable()
export class WebsiteRepository implements IWebsiteRepository{
    readonly BASE_URL = `${this.appSettings.getApiUrl()}/api/${this.appSettings.getInstanceName()}/v1/website`;

    constructor(private httpClient: HttpClient,
        private appSettings: AppSettingsService) { }
    
    getWebsiteData(): Observable<IHttpBasicResponse<Array<IWebsiteApiProps>>> {
        //console.log("------ EXECUTING WebsiteRepository.getWebsiteData()");
        return this.httpClient.get<IHttpBasicResponse<Array<IWebsiteApiProps>>>(`${this.BASE_URL}/sites`);
    }

    updateWebsiteData(siteId: number, payload: any): Observable<IHttpBasicResponse<IWebsiteDataProps>> {
        //console.log("------ EXECUTING WebsiteRepository.updateWebsiteData()");

        let params = new HttpParams();
        for (const key in payload) {
            if (payload.hasOwnProperty(key))
                params = params.append(key, payload[key]);
        }
        const body = params.toString();
        
        return this.httpClient.post<IHttpBasicResponse<IWebsiteDataProps>>(`${this.BASE_URL}/update_site/${siteId}`, body);
    }
}