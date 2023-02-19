import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Song } from '../types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private index = 0;

  readonly list$ = new BehaviorSubject<readonly Song[]>([]);
  readonly current$: Subject<Song> = new Subject();
  readonly next$: Subject<Song> = new Subject();
  readonly paused$: Subject<boolean> = new BehaviorSubject(true);

  next() {
    this.index = (this.index + 1) % this.list$.value.length;
    this.play();
  }

  prev() {
    this.index = this.index ? this.index - 1 : this.list$.value.length - 1;
    this.play();
  }

  play(index: number = this.index) {
    this.paused$.next(true);

    setTimeout(() => {
      this.index = index;
      this.current$.next(this.list$.value[index]);
      this.next$.next(this.list$.value[(index + 1) % this.list$.value.length]);
      this.paused$.next(false);
    });
  }

  pause() {
    this.paused$.next(true);
  }
}
