import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

import { QueueService } from '../../services/queue.service';

@Component({
  selector: '[appPlayer]',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  currentTime = 0;

  volume = 1;

  readonly queue = inject(QueueService);

  readonly paused$ = this.queue.paused$.pipe(
    concatMap((paused) => of(paused).pipe(delay(0)))
  );
}
