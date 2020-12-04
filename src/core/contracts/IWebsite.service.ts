import { Observable } from 'rxjs';
import { WebsitePageModel } from '../models/website.model';
import { IBusinessFormProps, IWebsiteFormProps } from './IWebsite.repository';

export interface IWebsiteService {
    getWebsiteData(): Observable<WebsitePageModel>;
    updateWebsiteData(siteId: number, payload: IWebsiteFormProps): Observable<WebsitePageModel>;
    updateBusinessData(siteId: number, payload: IBusinessFormProps): Observable<WebsitePageModel>;
}
