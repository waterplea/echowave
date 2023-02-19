import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";

@NgModule({
  imports: [
    TuiButtonModule,
    TuiSvgModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
