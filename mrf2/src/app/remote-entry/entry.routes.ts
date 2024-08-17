import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { ResultComponent } from '../result-component/result-component.component';
export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, children:[
    { path: 'result', component: ResultComponent  }
   ]
  }
];
