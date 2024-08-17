import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('mrf2/Routes').then((m) => m.remoteRoutes),
    outlet: 'mrf2'
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
