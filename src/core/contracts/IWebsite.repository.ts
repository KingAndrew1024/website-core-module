import { Observable } from 'rxjs';

import { IHttpBasicResponse } from './IHttpBasicResponse';

export interface IWebsiteRepository {
    getWebsiteData(): Observable<IHttpBasicResponse<Array<IWebsiteApiProps>>>;
    updateWebsiteData(siteId: number, payload: any): Observable<IHttpBasicResponse<IWebsiteDataProps>>;
}

export interface IWebsiteApiProps {
    site_id: string
    site_data: IWebsiteDataProps
}

export interface IWebsiteDataProps extends IWebsiteFormProps{
    theme_id: number
    site_url: string
    subdomian: string
    display_picture: { sizes: { thumbnail: string } }
}

export interface IWebsiteFormProps {
    title: string
    email: string
    facebook: string
    twitter: string
    instagram: string
    gplus: string
    about: string
    phone: string
    mobile: string
}