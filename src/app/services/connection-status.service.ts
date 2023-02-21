import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {
  private onlineStatus$: Subject<boolean> = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    window.addEventListener('online', () => {
      this.onlineStatus$.next(true);
    });
    window.addEventListener('offline', () => {
      this.onlineStatus$.next(false);
    });
  }
  public getOnlineStatus$(): Observable<boolean> {
    return this.onlineStatus$.asObservable();
  }
}
