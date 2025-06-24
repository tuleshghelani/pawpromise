import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'prelaunch',
    loadComponent: () => import('./pages/prelaunch/prelaunch.component').then(m => m.PrelaunchComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: '*',
    redirectTo: '',
  }
  // ... other routes
];
