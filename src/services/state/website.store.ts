import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSelector from '../../store/website.selectors';
import * as fromActions from '../../store/website.actions';
import * as fromReducer from '../../store/website.reducer';
import { IWebsiteFormProps, IBusinessFormProps, IDeleteImageFormProps } from '../../core/contracts/IWebsite.repository';


@Injectable()
export class WebsiteStore {
    constructor(public store: Store<fromReducer.WebsiteState>) { }

    get Loading$() { return this.store.select(fromSelector.getIsLoading); }

    get ImagesLoading$() { return this.store.select(fromSelector.getIsLoadingImages); }

    get Error$() { return this.store.select(fromSelector.getError); }

    get Success$() { return this.store.select(fromSelector.getSuccess); }

    LoadWebsite() { this.store.dispatch(fromActions.LoadWebsiteBeginAction()); }

    get Website$() { return this.store.select(fromSelector.getWebsiteData); }

    get HasBeenFetched$() {
        return this.store.select(fromSelector.hasBeenFetched);
    }

    UpdateWebsite(siteId: number, payload: IWebsiteFormProps) {
        this.store.dispatch(fromActions.UpdateWebsiteBeginAction({ siteId, payload }));
    }

    UpdateBusinessData(siteId: number, payload: IBusinessFormProps) {
        this.store.dispatch(fromActions.UpdateBusinessBeginAction({ siteId, payload }));
    }

    deleteImage(payload: IDeleteImageFormProps) {
        this.store.dispatch(fromActions.DeleteImageBeginAction({ payload }));
    }
}
