import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { SearchModule } from './components/search/search.module';
import { PlayerModule } from './components/player/player.module';
import { UserModule } from './components/user/user.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { PATHS } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    SearchModule,
    PlayerModule,
    UserModule,
    NavigationModule,
    RouterModule.forRoot(PATHS),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
