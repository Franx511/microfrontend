import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARE_FEATURE_KEY, ShareState, shareAdapter } from './share.reducer';

// Lookup the 'Share' feature state managed by NgRx
export const selectShareState =
  createFeatureSelector<ShareState>(SHARE_FEATURE_KEY);

const { selectAll, selectEntities } = shareAdapter.getSelectors();

export const selectShareLoaded = createSelector(
  selectShareState,
  (state: ShareState) => state.loaded
);

export const selectShareError = createSelector(
  selectShareState,
  (state: ShareState) => state.error
);

export const selectAllShare = createSelector(
  selectShareState,
  (state: ShareState) => selectAll(state)
);

export const selectShareEntities = createSelector(
  selectShareState,
  (state: ShareState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectShareState,
  (state: ShareState) => state.selectedId
);

export const selectEntity = createSelector(
  selectShareEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
