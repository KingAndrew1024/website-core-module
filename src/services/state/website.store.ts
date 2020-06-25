import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSelector from '../../store/website.selectors';
import * as fromActions from '../../store/website.actions';
import * as fromReducer from '../../store/website.reducer';
import { IWebsiteFormProps, IBusinessFormProps } from '../../core/contracts/IWebsite.repository';


@Injectable()
export class WebsiteStore {
    constructor(private store: Store<fromReducer.WebsiteState>) { }

    get Loading$() { return this.store.select(fromSelector.getIsLoading) };

    get Error$() { return this.store.select(fromSelector.getError) };

    get Success$() { return this.store.select(fromSelector.getSuccess) };

    LoadWebsite() { this.store.dispatch(fromActions.LoadWebsiteBeginAction()) }

    get Website$() { return this.store.select(fromSelector.getWebsiteData) }

    UpdateWebsite(siteId: number, payload: IWebsiteFormProps) { this.store.dispatch(fromActions.UpdateWebsiteBeginAction({ siteId,  payload })) }
    
    UpdateBusinessData(siteId: number, payload: IBusinessFormProps) { this.store.dispatch(fromActions.UpdateBusinessBeginAction({ siteId,  payload })) }
}