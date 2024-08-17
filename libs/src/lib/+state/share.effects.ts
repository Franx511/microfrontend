import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ShareActions from './share.actions';
import * as ShareFeature from './share.reducer';

@Injectable()
export class ShareEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShareActions.initShare),
      switchMap(() => of(ShareActions.loadShareSuccess({ share: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(ShareActions.loadShareFailure({ error }));
      })
    )
  );
}
