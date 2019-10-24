import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs'

@Injectable()
export class ResolverService implements Resolve<any>{

  audioFiles = [
    "https://archive.org/download/hadshotmusic_20191016/%D7%A2%D7%A7%D7%99%D7%91%D7%90%20%D7%92%D7%A2%D7%9C%D7%91%20-%20%D7%90%20%D7%90%D7%99%D7%93%D7%A2%D7%9C%D7%A2.mp3",
  ];

  resolve = (): Promise<string[]> => Promise.all(this.audioFiles.map(this.preloadAudio))
  //resolve = () => forkJoin(this.audioFiles.map(this.preloadAudio))

  preloadAudio = (url: string): Promise<string> => {
    const audio = new Audio();
    audio.src = url;
    return new Promise((res, req) => audio.addEventListener('canplaythrough', () => res(url), false))
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
  }
}

