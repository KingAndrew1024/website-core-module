import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { WebsiteStore } from './website.store';
import * as fromSelector from '../../store/website.selectors';
import * as fromActions from '../../store/website.actions';

describe('WebsiteStore', () => {
    let store: any;
    let websiteStore: WebsiteStore;

    const siteId = 123;
    const payload = { hello: 'world' } as any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Store, useValue: { select: of(true), dispatch: () => {} }
                },
                WebsiteStore
            ]
        });

        store = TestBed.inject(Store);
        websiteStore = TestBed.inject(WebsiteStore);

        spyOn(store, 'select').and.returnValue(of(true /* any value, we are not testing this result */));
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('Should be created', () => {
        expect(websiteStore).toBeTruthy('WebsiteStore was not created');
    });

    it('Loading$ should call select once with parameter fromSelector.getIsLoading', (done: DoneFn) => {
        websiteStore.Loading$.subscribe(_ => {
            expect(websiteStore.store.select).toHaveBeenCalledTimes(1);
            expect(websiteStore.store.select as any).toHaveBeenCalledWith(fromSelector.getIsLoading);
            done();
        });
    });

    it('Error$ should call select once with parameter fromSelector.getError', (done: DoneFn) => {
        websiteStore.Error$.subscribe(_ => {
            expect(websiteStore.store.select).toHaveBeenCalledTimes(1);
            expect(websiteStore.store.select as any).toHaveBeenCalledWith(fromSelector.getError);
            done();
        });
    });

    it('Success$ should call select once with parameter fromSelector.getSuccess', (done: DoneFn) => {
        websiteStore.Success$.subscribe(_ => {
            expect(websiteStore.store.select).toHaveBeenCalledTimes(1);
            expect(websiteStore.store.select as any).toHaveBeenCalledWith(fromSelector.getSuccess);
            done();
        });
    });

    it('Website$ should call select once with parameter fromSelector.getWebsiteData', (done: DoneFn) => {
        websiteStore.Website$.subscribe(_ => {
            expect(websiteStore.store.select).toHaveBeenCalledTimes(1);
            expect(websiteStore.store.select as any).toHaveBeenCalledWith(fromSelector.getWebsiteData);
            done();
        });
    });

    it('HasBeenFetched$ should call select once with parameter fromSelector.hasBeenFetched', (done: DoneFn) => {
        websiteStore.HasBeenFetched$.subscribe(_ => {
            expect(websiteStore.store.select).toHaveBeenCalledTimes(1);
            expect(websiteStore.store.select as any).toHaveBeenCalledWith(fromSelector.hasBeenFetched);
            done();
        });
    });

    it('LoadWebsite should call dispatch once with parameter fromSelector.hasBeenFetched', () => {
        websiteStore.LoadWebsite();

        expect(websiteStore.store.dispatch).toHaveBeenCalledTimes(1);
        expect(websiteStore.store.dispatch as any).toHaveBeenCalledWith(fromActions.LoadWebsiteBeginAction());
    });

    it('UpdateWebsite should call dispatch once with parameter fromSelector.hasBeenFetched', () => {
        websiteStore.UpdateWebsite(siteId, payload);

        expect(websiteStore.store.dispatch).toHaveBeenCalledTimes(1);
        expect(websiteStore.store.dispatch as any).toHaveBeenCalledWith(fromActions.UpdateWebsiteBeginAction({ siteId, payload }));
    });

    it('UpdateBusinessData should call dispatch once with parameter fromSelector.hasBeenFetched', () => {
        websiteStore.UpdateBusinessData(siteId, payload);

        expect(websiteStore.store.dispatch).toHaveBeenCalledTimes(1);
        expect(websiteStore.store.dispatch as any).toHaveBeenCalledWith(fromActions.UpdateBusinessBeginAction({ siteId, payload }));
    });
});
