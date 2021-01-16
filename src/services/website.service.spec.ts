import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { IBusinessFormProps, IWebsiteFormProps, IWebsiteRepository, IWebsiteService, WebsitePageModel } from '../core';
import { TEST_SITES_LIST_API_DATA } from '../core/mocks/website.data.mock';
import { MockWebsiteRepository } from '../core/mocks/website.repository.mock';
import { WEBSITE_REPOSITORY, WEBSITE_SERVICE } from './identifiers';
import { WebsiteService } from './website.service';

describe('WebsiteService', () => {
    const siteId = TEST_SITES_LIST_API_DATA[0].site_id;

    let mockWebsiteRepository: IWebsiteRepository;
    let websiteService: IWebsiteService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: WEBSITE_REPOSITORY, useClass: MockWebsiteRepository },
                { provide: WEBSITE_SERVICE, useClass: WebsiteService }
            ]
        });

        mockWebsiteRepository = TestBed.inject(WEBSITE_REPOSITORY);
        websiteService = TestBed.inject(WEBSITE_SERVICE);
    });

    it('Should be created', () => {
        expect(websiteService).toBeTruthy();
    });

    it('getWebsiteData should get an instance of WebsitePageModel', (done: DoneFn) => {
        websiteService.getWebsiteData()
            .subscribe(response => {
                expect(response instanceof WebsitePageModel).toBeTrue();
                done();
            });
    });
    it('getWebsiteData should FAIL to get data', (done: DoneFn) => {
        spyOn(mockWebsiteRepository, 'getWebsiteData').and.returnValue(throwError('some bad error'));

        websiteService.getWebsiteData()
            .subscribe(() => { }, error => {
                expect(error).toBeDefined();
                done();
            });
    });

    it('updateWebsiteData should get an instance of WebsitePageModel', (done: DoneFn) => {
        const newWebsiteFormData: IWebsiteFormProps = {
            ...TEST_SITES_LIST_API_DATA[0].site_data,
            title: 'Updated Title'
        };

        websiteService.updateWebsiteData(+siteId, newWebsiteFormData)
            .subscribe(response => {
                expect(response instanceof WebsitePageModel).toBeTrue();
                done();
            });
    });
    it('updateWebsiteData should FAIL to get data', (done: DoneFn) => {
        spyOn(mockWebsiteRepository, 'updateWebsiteData').and.returnValue(throwError('some bad error'));

        websiteService.updateWebsiteData(+siteId, {} as any)
            .subscribe(() => { }, error => {
                expect(error).toBeDefined();
                done();
            });
    });

    it('updateBusinessData should get an instance of WebsitePageModel', (done: DoneFn) => {
        const newWebsiteFormData: IBusinessFormProps = {
            hours_of_operation: {...TEST_SITES_LIST_API_DATA[0].site_data.hours_of_operation},
            hours_of_operation_notes: TEST_SITES_LIST_API_DATA[0].site_data.hours_of_operation_notes,
            payment_forms: TEST_SITES_LIST_API_DATA[0].site_data.payment_forms as any,
            products: {...TEST_SITES_LIST_API_DATA[0].site_data.products},
        };

        websiteService.updateBusinessData(+siteId, newWebsiteFormData)
            .subscribe(response => {
                console.log(response);

                expect(response instanceof WebsitePageModel).toBeTrue();
                done();
            });
    });
    it('updateBusinessData should FAIL to get data', (done: DoneFn) => {
        spyOn(mockWebsiteRepository, 'updateBusinessData').and.returnValue(throwError('some bad error'));

        websiteService.updateBusinessData(+siteId, {} as any)
            .subscribe(() => { }, error => {
                expect(error).toBeDefined();
                done();
            });
    });
});
