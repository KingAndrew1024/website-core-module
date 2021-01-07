import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { IWebsiteService } from '../core';
import { WebsiteEffects } from './website.effects';
import { AppState } from './website.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { WEBSITE_SERVICE } from '../services';
import { WebsiteActionTypes } from './website.actions';



class MockWebsiteService {
    getWebsiteData() { }

    updateWebsiteData() { }

    updateBusinessData() { }
}

describe('WebsiteEffects', () => {
    let effects: WebsiteEffects;
    let actions$ = new Observable<Action>();
    let store: MockStore<AppState>;
    let service: IWebsiteService;

    const initialState = { website: {} };

    const errorString = 'some bad error';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WebsiteEffects,
                provideMockStore({ initialState }),
                provideMockActions(() => actions$),
                { provide: WEBSITE_SERVICE, useClass: MockWebsiteService }
            ]
        });

        effects = TestBed.inject(WebsiteEffects);
        store = TestBed.inject(MockStore);
        service = TestBed.inject(WEBSITE_SERVICE);
    });

    it('Should be created', () => {
        expect(effects).toBeTruthy('WebsiteEffects was not created');
    });

    it('loadWebsite$ should return a LoadWebsiteSuccess action with the expected payload', (done: DoneFn) => {
        const expectedPayload = { hello: 'World' } as any;

        const spy = spyOn(service, 'getWebsiteData').and.returnValue(of(expectedPayload));

        actions$ = of({ type: WebsiteActionTypes.LoadWebsiteBegin });

        effects.loadWebsite$.subscribe(response => {
            expect(response.type).toEqual(WebsiteActionTypes.LoadWebsiteSuccess);
            expect((response as any).payload).toEqual(expectedPayload);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    it('loadWebsite$ should return a LoadWebsiteFail action with the error object on failure', (done: DoneFn) => {
        const spy = spyOn(service, 'getWebsiteData').and.returnValue(throwError(errorString));

        actions$ = of({ type: WebsiteActionTypes.LoadWebsiteBegin });

        effects.loadWebsite$.subscribe(response => {
            expect(response.type).toEqual(WebsiteActionTypes.LoadWebsiteFail);
            expect((response as any).errors).toBeDefined();
            expect((response as any).errors).toBe(errorString);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('updateWebsite$ should return a UpdateBusinessSuccess action with the expected payload', (done: DoneFn) => {
        const expectedPayload = { hello: 'World' } as any;

        const spy = spyOn(service, 'updateWebsiteData').and.returnValue(of(expectedPayload));

        actions$ = of({ type: WebsiteActionTypes.UpdateWebsiteBegin });

        effects.updateWebsite$.subscribe(response => {
            expect(response.type).toEqual(WebsiteActionTypes.UpdateWebsiteSuccess);
            expect((response as any).payload).toEqual(expectedPayload);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    it('updateWebsite$ should return a UpdateBusinessFail action with the error object on failure', (done: DoneFn) => {
        const spy = spyOn(service, 'updateWebsiteData').and.returnValue(throwError(errorString));

        actions$ = of({ type: WebsiteActionTypes.UpdateWebsiteBegin });

        effects.updateWebsite$.subscribe(response => {
            expect(response.type).toEqual(WebsiteActionTypes.UpdateWebsiteFail);
            expect((response as any).errors).toBeDefined();
            expect((response as any).errors).toBe(errorString);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('updateBusiness$ should return a UpdateBusinessSuccess action with the expected payload', (done: DoneFn) => {
        const expectedPayload = { hello: 'World' } as any;

        const spy = spyOn(service, 'updateBusinessData').and.returnValue(of(expectedPayload));

        actions$ = of({ type: WebsiteActionTypes.UpdateBusinessBegin });

        effects.updateBusiness$.subscribe(response => {
            expect(response.type).toEqual(WebsiteActionTypes.UpdateBusinessSuccess);
            expect((response as any).payload).toEqual(expectedPayload);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    it('updateBusiness$ should return a UpdateBusinessFail action with the error object on failure', (done: DoneFn) => {
        const spy = spyOn(service, 'updateBusinessData').and.returnValue(throwError(errorString));

        actions$ = of({ type: WebsiteActionTypes.UpdateBusinessBegin });

        effects.updateBusiness$.subscribe(response => {
            expect(response.type).toEqual(WebsiteActionTypes.UpdateBusinessFail);
            expect((response as any).errors).toBeDefined();
            expect((response as any).errors).toBe(errorString);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
});
