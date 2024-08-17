import { ShareEntity } from './share.models';
import {
  shareAdapter,
  SharePartialState,
  initialShareState,
} from './share.reducer';
import * as ShareSelectors from './share.selectors';

describe('Share Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getShareId = (it: ShareEntity) => it.id;
  const createShareEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ShareEntity);

  let state: SharePartialState;

  beforeEach(() => {
    state = {
      share: shareAdapter.setAll(
        [
          createShareEntity('PRODUCT-AAA'),
          createShareEntity('PRODUCT-BBB'),
          createShareEntity('PRODUCT-CCC'),
        ],
        {
          ...initialShareState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Share Selectors', () => {
    it('selectAllShare() should return the list of Share', () => {
      const results = ShareSelectors.selectAllShare(state);
      const selId = getShareId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ShareSelectors.selectEntity(state) as ShareEntity;
      const selId = getShareId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectShareLoaded() should return the current "loaded" status', () => {
      const result = ShareSelectors.selectShareLoaded(state);

      expect(result).toBe(true);
    });

    it('selectShareError() should return the current "error" state', () => {
      const result = ShareSelectors.selectShareError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
