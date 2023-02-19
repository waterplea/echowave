import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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
}
