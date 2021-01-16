import { InjectionToken } from '@angular/core';
import { IWebsiteRepository } from '../core';

import { IWebsiteService } from '../core/contracts/IWebsite.service';

export const WEBSITE_SERVICE = new InjectionToken<IWebsiteService>('websiteService');
export const WEBSITE_REPOSITORY = new InjectionToken<IWebsiteRepository>('websiteRepository');

