import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as fromActions from './website.actions';
import { IWebsiteService } from '../core/contracts/IWebsite.service';
import { WEBSITE_SERVICE } from '../services/identifiers';

@Injectable()
export class WebsiteEffects {
    loadWebsite$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromActions.WebsiteActionTypes.LoadWebsiteBegin),
            switchMap(() => {
                return this.service.getWebsiteData().pipe(
                    map(websitePage => fromActions.LoadWebsiteSuccessAction({ payload: websitePage })),
                    catchError(errors => {
                        console.error("WebsiteEffects.loadWebsite$ ERROR", errors);
                        return of(fromActions.LoadWebsiteFailAction({ errors: errors }))
                    })
                )
            })
        )
    )

    updateWebsite$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromActions.WebsiteActionTypes.UpdateWebsiteBegin),
            switchMap((action) => {
                return this.service.updateWebsiteData((<any>action).siteId, (<any>action).payload).pipe(
                    map(response => {
                        return fromActions.UpdateWebsiteSuccessAction({ payload: response })
                    }),
                    catchError(errors => {
                        console.error("WebsiteEffects.updateWebsite$ ERROR", errors);
                        return of(fromActions.UpdateWebsiteFailAction({ errors: errors }))
                    })
                )
            })
        )
    )

    constructor(
        private actions$: Actions,
        @Inject(WEBSITE_SERVICE) private service: IWebsiteService
    ) { }
}