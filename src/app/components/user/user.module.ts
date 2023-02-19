import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
  TuiThemeNightModule,
} from '@taiga-ui/core';
import { TuiToggleModule } from '@taiga-ui/kit';

import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiToggleModule,
    TuiThemeNightModule,
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
