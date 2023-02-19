import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { TuiAvatarModule, TuiInputModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    RouterLink,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiAvatarModule,
    TuiInputModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
