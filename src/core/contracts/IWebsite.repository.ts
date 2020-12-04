import { Observable } from 'rxjs';
import { IHttpBasicResponse } from './IHttpBasicResponse';

export interface IWebsiteRepository {
    getWebsiteData(): Observable<IHttpBasicResponse<Array<IWebsiteApiProps>>>;
    updateWebsiteData(siteId: number, payload: IWebsiteFormProps): Observable<IHttpBasicResponse<IWebsiteDataProps>>;
    updateBusinessData(siteId: number, payload: IBusinessFormProps): Observable<IHttpBasicResponse<IWebsiteDataProps>>;
}

export interface IWebsiteApiProps {
    site_id: string;
    site_data: IWebsiteDataProps;
}

export interface IWebsiteDataProps extends IWebsiteFormProps, IBusinessFormProps {
    theme_id: number;
    site_url: string;
    subdomian: string;
    display_picture: { sizes: { thumbnail: string } };
}

export interface IWebsiteFormProps {
    title: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    gplus: string;
    about: string;
    phone: string;
    mobile: string;
}

export interface IBusinessFormProps {
    hours_of_operation: Array<any>;
    hours_of_operation_notes: string;
    payment_forms: Array<'visa' | 'mastercard' | 'cash' | 'checks' | 'american-express'>;
    products: Array<string>;
}
