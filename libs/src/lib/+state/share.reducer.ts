import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ShareActions from './share.actions';
import { ShareEntity } from './share.models';

export const SHARE_FEATURE_KEY = 'share';

export interface ShareState extends EntityState<ShareEntity> {
  selectedId?: string | number; // which Share record has been selected
  loaded: boolean; // has the Share list been loaded
  error?: string | null; // last known error (if any)
}

export interface SharePartialState {
  readonly [SHARE_FEATURE_KEY]: ShareState;
}

export const shareAdapter: EntityAdapter<ShareEntity> =
  createEntityAdapter<ShareEntity>();

export const initialShareState: ShareState = shareAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialShareState,
  on(ShareActions.initShare, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ShareActions.loadShareSuccess, (state, { share }) =>
    shareAdapter.setAll(share, { ...state, loaded: true })
  ),
  on(ShareActions.loadShareFailure, (state, { error }) => ({ ...state, error }))
);

export function shareReducer(state: ShareState | undefined, action: Action) {
  return reducer(state, action);
}
