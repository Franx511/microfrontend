import { createAction, props } from '@ngrx/store';
import { ShareEntity } from './share.models';

export const initShare = createAction('[Share Page] Init');

export const loadShareSuccess = createAction(
  '[Share/API] Load Share Success',
  props<{ share: ShareEntity[] }>()
);

export const loadShareFailure = createAction(
  '[Share/API] Load Share Failure',
  props<{ error: any }>()
);
