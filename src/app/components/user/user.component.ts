import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { DOCUMENT } from '@angular/common';

const KEY = 'night-theme';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  private readonly documentRef = inject(DOCUMENT);
  private readonly localStorage = inject(LOCAL_STORAGE);

  open = false;

  night = this.localStorage.getItem(KEY) === 'true';

  constructor() {
    this.documentRef.body.classList.toggle('_night', this.night);
  }

  toggle() {
    this.night = !this.night;
    this.localStorage.setItem(KEY, String(this.night));
    this.documentRef.body.classList.toggle('_night', this.night);
  }
}
