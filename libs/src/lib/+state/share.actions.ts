import { createAction, props } from '@ngrx/store';
import { ShareState } from './share.models';

export const inputShareSuccess = createAction(
  '[Share/API] Input Share Success',
  props<ShareState>()
);
