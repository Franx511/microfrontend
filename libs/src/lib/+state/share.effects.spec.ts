import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ShareActions from './share.actions';
import { ShareEffects } from './share.effects';

describe('ShareEffects', () => {
  let actions: Observable<Action>;
  let effects: ShareEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ShareEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ShareEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ShareActions.initShare() });

      const expected = hot('-a-|', {
        a: ShareActions.loadShareSuccess({ share: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
