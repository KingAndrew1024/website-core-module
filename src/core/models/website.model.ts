import { IWebsiteApiProps } from '../contracts/IWebsite.repository';


export class WebsitePageModel implements IWebsitePageProps {
    websiteList: WebsiteModel[];

    constructor(data: IWebsitePageProps) {
        this.websiteList = data.websiteList;
    }

    static fromApiResponse(raw: Array<IWebsiteApiProps>): IWebsitePageProps {
        return new WebsitePageModel({
            websiteList: raw.map(resp => {
                return WebsiteModel.fromApiResponse(resp);
            })
        });
    }

    static empty(): WebsitePageModel {
        return new WebsitePageModel({
            websiteList: [WebsiteModel.empty()]
        });
    }
}

export class WebsiteModel implements IWebsiteModelProps {
    siteId: number;
    title: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    gplus: string;
    siteUrl: string;
    subdomain: string;
    about: string;
    displayPicture?: IWebsitePicturesProps;
    phone: string;
    mobile: string;
    hoursOfOperation: any[];
    hoursOfOperationNotes: string;
    paymentForms: ('visa' | 'mastercard' | 'cash' | 'checks' | 'american-express')[];
    products: string[];

    constructor(data: IWebsiteModelProps) {
        this.siteId = data.siteId;
        this.title = data.title;
        this.email = data.email;
        this.facebook = data.facebook && data.facebook !== 'null' ? data.facebook : '';
        this.twitter = data.twitter && data.twitter !== 'null' ? data.twitter : '';
        this.instagram = data.instagram && data.instagram !== 'null' ? data.instagram : '';
        this.gplus = data.gplus && data.gplus !== 'null' ? data.gplus : '';
        this.siteUrl = data.siteUrl;
        this.subdomain = data.subdomain;
        this.about = data.about;
        this.displayPicture = data.displayPicture;
        this.phone = data.phone;
        this.mobile = data.mobile;
        this.hoursOfOperation = data.hoursOfOperation || [];
        this.hoursOfOperationNotes = data.hoursOfOperationNotes || '';
        this.paymentForms = data.paymentForms || [];
        this.products = data.products || [];
    }

    static fromApiResponse(data: IWebsiteApiProps): IWebsiteModelProps {
        let siteUrl = (data.site_data.site_url || '').replace('https', 'http');

        if (siteUrl) {
            siteUrl = siteUrl.startsWith('http') ? siteUrl : 'http://' + siteUrl;
        }

        return new WebsiteModel({
            siteId: +data.site_id,
            title: data.site_data.title,
            email: data.site_data.email,
            facebook: data.site_data.facebook,
            twitter: data.site_data.twitter,
            instagram: data.site_data.instagram,
            gplus: data.site_data.gplus,
            siteUrl,
            subdomain: data.site_data.subdomian,
            about: data.site_data.about,
            displayPicture: {
                carrouselUrlImages: data.site_data.display_picture.carrousel_url_images,
                logoUrlImage: data.site_data.display_picture.logo_url_image,
                bannerUrl: data.site_data.tagline
            },
            phone: data.site_data.phone,
            mobile: data.site_data.mobile,
            hoursOfOperation: data.site_data.hours_of_operation,
            hoursOfOperationNotes: data.site_data.hours_of_operation_notes,
            paymentForms: data.site_data.payment_forms,
            products: data.site_data.products
        });
    }

    static empty(): WebsiteModel {
        return new WebsiteModel({
            siteId: null,
            title: null,
            email: null,
            facebook: null,
            twitter: null,
            instagram: null,
            gplus: null,
            siteUrl: null,
            subdomain: null,
            about: null,
            displayPicture: null,
            phone: null,
            mobile: null,
            hoursOfOperation: null,
            hoursOfOperationNotes: null,
            paymentForms: null,
            products: null
        });
    }
}

export interface IWebsiteModelProps {
    siteId: number;
    title: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    gplus: string;
    siteUrl: string;
    subdomain: string;
    about: string;
    displayPicture?: IWebsitePicturesProps;
    phone: string;
    mobile: string;
    hoursOfOperation: Array<any>;
    hoursOfOperationNotes: string;
    paymentForms: Array<'visa' | 'mastercard' | 'cash' | 'checks' | 'american-express'>;
    products: Array<string>;
}

export interface IWebsitePicturesProps {
    logoUrlImage: string;
    bannerUrl: string;
    carrouselUrlImages: {[key: number]: string};
}

export interface IWebsitePageProps {
    websiteList: Array<WebsiteModel>;
}
