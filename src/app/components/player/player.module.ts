import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLabelModule } from '@taiga-ui/core';
import { TuiAvatarModule, TuiSliderModule } from '@taiga-ui/kit';

import { PlayerComponent } from './player.component';
import {TuiLetModule, TuiMediaModule} from "@taiga-ui/cdk";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TuiAvatarModule,
    TuiLabelModule,
    TuiSliderModule,
    TuiButtonModule,
    TuiLetModule,
    TuiMediaModule,
  ],
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
})
export class PlayerModule {}
