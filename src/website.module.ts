import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppSettingsService, WebsiteModuleOptionsInterface } from './providers/global-params';
import { WebsiteRepository } from './repositories/website.repository';
import { WEBSITE_SERVICE } from './services/identifiers';
import { WebsiteStore } from './services/state/website.store';
import { WebsiteService } from './services/website.service';
import { WebsiteEffects } from './store/website.effects';
import { websiteReducer } from './store/website.reducer';

export const AppSettingsObject = new InjectionToken('AppSettingsObject');

export function createAppSettingsService(settings: WebsiteModuleOptionsInterface) {
    return new AppSettingsService(settings);
}

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forFeature('website', websiteReducer),
        EffectsModule.forFeature([WebsiteEffects]),
    ],
    providers: [

    ],
    declarations: [
        // declare all components that your module uses
        // MyComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        // MyComponent
    ]
})
export class WebsiteCoreModule {
    static forRoot(config: WebsiteModuleOptionsInterface): ModuleWithProviders<WebsiteCoreModule> {
        return {
            ngModule: WebsiteCoreModule,
            providers: [
                { provide: AppSettingsObject, useValue: config },
                {
                    provide: AppSettingsService,
                    useFactory: (createAppSettingsService),
                    deps: [AppSettingsObject]
                },
                { provide: WEBSITE_SERVICE, useClass: WebsiteService },
                WebsiteRepository,
                WebsiteStore
            ]
        };
    }
}

