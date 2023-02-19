import { Routes } from '@angular/router';

export const PATHS: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./routes/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'artist',
    loadChildren: () =>
      import('./routes/artist/artist.module').then((m) => m.ArtistModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
