import { IWebsiteApiProps } from "../contracts/IWebsite.repository";


export class WebsitePageModel implements IWebsitePageProps {
    websiteList: WebsiteModel[];

    constructor(data: IWebsitePageProps) {
        this.websiteList = data.websiteList
    }

    static toStorage(websitePage: WebsitePageModel): IWebsitePageProps {
        return {
            websiteList: websitePage.websiteList
        }
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

export class WebsiteModel implements IWebsiteProps {
    siteId: number
    title: string
    email: string
    facebook: string
    twitter: string
    instagram: string
    gplus: string
    siteUrl: string
    subdomain: string
    about: string
    displayPicture: {
        sizes: {
            thumbnail: string
        }
    }
    phone: string
    mobile: string

    constructor(data: IWebsiteProps) {
        this.siteId = data.siteId
        this.title = data.title,
        this.email = data.email,
        this.facebook = data.facebook && data.facebook != 'null' ? data.facebook : '',
        this.twitter = data.twitter && data.twitter != 'null' ? data.twitter : '',
        this.instagram = data.instagram && data.instagram != 'null' ? data.instagram : '',
        this.gplus = data.gplus && data.gplus != 'null' ? data.gplus : '',
        this.siteUrl = data.siteUrl,
        this.subdomain = data.subdomain,
        this.about = data.about,
        this.displayPicture = data.displayPicture,
        this.phone = data.phone,
        this.mobile = data.mobile
    }

    static toStorage(website: WebsiteModel): IWebsiteProps {
        return {
            siteId: website.siteId,
            title: website.title,
            email: website.email,
            facebook: website.facebook,
            twitter: website.twitter,
            instagram: website.instagram,
            gplus: website.gplus,
            siteUrl: website.siteUrl,
            subdomain: website.subdomain,
            about: website.about,
            displayPicture: website.displayPicture,
            phone: website.phone,
            mobile: website.mobile,
        }
    }

    static fromApiResponse(data: IWebsiteApiProps): IWebsiteProps {
        return new WebsiteModel({
            siteId: +data.site_id,
            title: data.site_data.title,
            email: data.site_data.email,
            facebook: data.site_data.facebook,
            twitter: data.site_data.twitter,
            instagram: data.site_data.instagram,
            gplus: data.site_data.gplus,
            siteUrl: data.site_data.site_url,
            subdomain: data.site_data.subdomian,
            about: data.site_data.about,
            displayPicture: data.site_data.display_picture,
            phone: data.site_data.phone,
            mobile: data.site_data.mobile,
        })
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
        })
    }
}

export interface IWebsiteProps {
    siteId: number
    title: string
    email: string
    facebook: string
    twitter: string
    instagram: string
    gplus: string
    siteUrl: string
    subdomain: string
    about: string
    displayPicture: {
        sizes: {
            thumbnail: string
        }
    }
    phone: string
    mobile: string
}

export interface IWebsitePageProps {
    websiteList: Array<WebsiteModel>
}