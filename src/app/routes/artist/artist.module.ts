import { NgModule } from '@angular/core';

import { ArtistComponent } from './artist.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import {TuiLetModule} from "@taiga-ui/cdk";

const ROUTES: Routes = [
  {
    path: ':artistId',
    component: ArtistComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), TuiButtonModule, TuiLetModule],
  declarations: [ArtistComponent],
  exports: [ArtistComponent],
})
export class ArtistModule {}
