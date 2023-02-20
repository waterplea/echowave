import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiAvatarModule } from '@taiga-ui/kit';

import { DashboardComponent } from './dashboard.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), TuiAvatarModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
