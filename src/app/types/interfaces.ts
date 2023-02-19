export interface Song {
  readonly title: string;
  readonly artist: string;
  readonly cover: string;
  readonly album: string;
  readonly duration: string;
  readonly url: string;
}

export interface Album {
  readonly title: string;
  readonly artist: string;
  readonly cover: string;
  readonly year: number;
  readonly description: string;
  readonly songs: Song[];
}

export interface Artist {
  readonly name: string;
  readonly description: string;
  readonly cover: string;
  readonly albums: Album[];
}
