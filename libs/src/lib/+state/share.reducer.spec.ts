import { Action } from '@ngrx/store';

import * as ShareActions from './share.actions';
import { ShareEntity } from './share.models';
import { ShareState, initialShareState, shareReducer } from './share.reducer';

describe('Share Reducer', () => {
  const createShareEntity = (id: string, name = ''): ShareEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Share actions', () => {
    it('loadShareSuccess should return the list of known Share', () => {
      const share = [
        createShareEntity('PRODUCT-AAA'),
        createShareEntity('PRODUCT-zzz'),
      ];
      const action = ShareActions.loadShareSuccess({ share });

      const result: ShareState = shareReducer(initialShareState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = shareReducer(initialShareState, action);

      expect(result).toBe(initialShareState);
    });
  });
});
