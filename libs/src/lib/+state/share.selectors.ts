import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARE_FEATURE_KEY } from './share.reducer';
import { ShareState } from './share.models';

// Lookup the 'Share' feature state managed by NgRx
export const selectShareState =
  createFeatureSelector<ShareState>(SHARE_FEATURE_KEY);

export const selectShareInputValue = createSelector(
  selectShareState,
  (state: ShareState) => state.inputValue
);
