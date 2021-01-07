import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IWebsiteRepository } from '../core';
import { AppSettingsService } from '../providers/global-params';
import { WEBSITE_REPOSITORY } from '../services/identifiers';
import { WebsiteRepository } from './website.repository';

describe('WebsiteRepository', () => {
    const fakeAppSettingsService = {
        getApiUrl: () => 'any_string',
        getInstanceName: () => 'any_string'
    };

    let httpTestingController: HttpTestingController;
    let websiteRepository: IWebsiteRepository;

    const siteId = 123;
    const payload = { hola: 'mundo' } as any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: AppSettingsService, useValue: fakeAppSettingsService },
                { provide: WEBSITE_REPOSITORY, useClass: WebsiteRepository },
            ]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        websiteRepository = TestBed.inject(WEBSITE_REPOSITORY);
    });

    it('Should be created', () => {
        expect(websiteRepository).toBeTruthy();
    });

    it('getWebsiteData Should call endpoint /sites with method GET', () => {
        websiteRepository.getWebsiteData()
            .subscribe(resp => {
                console.log(resp);

            });

        const req = httpTestingController.expectOne(request => request.url.endsWith('/sites'));

        expect(req.request.method).toBe('GET');

        req.flush({ status: 'success' });
    });

    it('updateWebsiteData Should call endpoint /update_site/{siteId} with method POST', () => {

        websiteRepository.updateWebsiteData(siteId, payload)
            .subscribe();

        const req = httpTestingController.expectOne(request => request.url.includes(`/update_site/`));

        expect(req.request.url.endsWith(`${siteId}`));
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toBeDefined();

        req.flush({ status: 'success' });
    });

    it('updateBusinessData Should call endpoint /update_business_info/{siteId} with method POST', () => {

        websiteRepository.updateBusinessData(siteId, payload)
            .subscribe();

        const req = httpTestingController.expectOne(request => request.url.includes(`/update_business_info/`));

        expect(req.request.method).toBe('POST');
        expect(req.request.url.endsWith(`${siteId}`));
        expect(req.request.body).toBeDefined();

        req.flush({ status: 'success' });
    });
});
