import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./input-component/input-component.component').then((m) => m.InputComponent),
  },
];
