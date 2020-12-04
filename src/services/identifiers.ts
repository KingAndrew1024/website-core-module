import { InjectionToken } from '@angular/core';
import { IWebsiteService } from '../core/contracts/IWebsite.service';

export const WEBSITE_SERVICE = new InjectionToken<IWebsiteService>('websiteService');
