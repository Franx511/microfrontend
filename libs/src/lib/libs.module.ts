import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromShare from './+state/share.reducer';
import { ShareEffects } from './+state/share.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromShare.SHARE_FEATURE_KEY, fromShare.shareReducer),
    EffectsModule.forFeature([ShareEffects]),
  ],
})
export class LibsModule {}
