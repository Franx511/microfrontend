import { createReducer, on, Action } from '@ngrx/store';

import * as ShareActions from './share.actions';
import { ShareState } from './share.models';

export const SHARE_FEATURE_KEY = 'share';

export interface SharePartialState {
  readonly [SHARE_FEATURE_KEY]: ShareState;
}

export const initialShareState: ShareState = {
  // set initial required properties
  inputValue: '',
};

const reducer = createReducer(
  initialShareState,
  on(ShareActions.inputShareSuccess, (_, share) => ({
    inputValue: share.inputValue,
  }))
);

export function shareReducer(state: ShareState | undefined, action: Action) {
  return reducer(state, action);
}
