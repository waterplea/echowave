import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Song } from '../../types/interfaces';
import { QueueService } from '../../services/queue.service';

const META = {
  artist: 'Waterplea',
  album: 'Rudimentary Oscillations',
  cover: 'assets/tracks/cover.png',
};

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistComponent {
  readonly route = inject(ActivatedRoute);

  readonly queue = inject(QueueService);

  readonly tracks: readonly Song[] = [
    {
      title: 'Fall-a-sleep',
      duration: '3:30',
      url: 'assets/tracks/01.mp3',
      ...META,
    },
    {
      title: 'DD',
      duration: '32:39',
      url: 'assets/tracks/02.mp3',
      ...META,
    },
    {
      title: 'Weakup-Dream',
      duration: '3:30',
      url: 'assets/tracks/03.mp3',
      ...META,
    },
    {
      title: 'Strays',
      duration: '2:22',
      url: 'assets/tracks/04.mp3',
      ...META,
    },
    {
      title: 'Yeartides (Part I)',
      duration: '3:59',
      url: 'assets/tracks/05.mp3',
      ...META,
    },
    {
      title: 'Yeartides (Part II)',
      duration: '3:03',
      url: 'assets/tracks/06.mp3',
      ...META,
    },
    {
      title: 'Satellite',
      duration: '7:19',
      url: 'assets/tracks/07.mp3',
      ...META,
    },
    {
      title: 'Bathyscaphe',
      duration: '9:33',
      url: 'assets/tracks/08.mp3',
      ...META,
    },
    {
      title: 'Zeppelin',
      duration: '9:15',
      url: 'assets/tracks/09.mp3',
      ...META,
    },
    {
      title: 'Scaphandre',
      duration: '9:34',
      url: 'assets/tracks/10.mp3',
      ...META,
    },
    {
      title: 'Departure',
      duration: '2:05',
      url: 'assets/tracks/11.mp3',
      ...META,
    },
  ];

  onPlay(index: number) {
    this.queue.list$.next(this.tracks);
    this.queue.play(index);
  }
}
