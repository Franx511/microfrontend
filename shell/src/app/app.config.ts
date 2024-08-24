import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import * as fromShare from '@demo/libs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideState(fromShare.SHARE_FEATURE_KEY, fromShare.shareReducer),
    provideStore(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
