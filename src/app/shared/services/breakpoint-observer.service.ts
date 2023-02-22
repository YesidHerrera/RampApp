import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  isSmallSize = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
  .pipe(
    map(result => result.matches)
  );
}
