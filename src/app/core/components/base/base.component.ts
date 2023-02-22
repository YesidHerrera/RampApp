import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';
import { ConnectionStatusService } from 'src/app/shared/services/connection-status.service';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences.service';

@Component({
  selector: 'RampApp-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy{
  isOnline = false;
  isSmallSize = false;
  colorTheme: string = 'primary';
  private unsubscribe$: Subject<void> = new Subject<void>();

  private connectionStatusService;
  private breakpointObserver;
  private userPreferencesService;

  constructor() {
    this.connectionStatusService = inject(ConnectionStatusService);
    this.breakpointObserver = inject(BreakpointObserverService);
    this.userPreferencesService = inject(UserPreferencesService);
  }

  ngOnInit(): void {
    this.connectionStatusService.getOnlineStatus$().pipe(takeUntil(this.unsubscribe$)).subscribe((isOnline) => this.isOnline = isOnline);
    this.breakpointObserver.isSmallSize.pipe(takeUntil(this.unsubscribe$)).subscribe(isSmall => this.isSmallSize = isSmall);
    this.userPreferencesService.getColorTheme().pipe(takeUntil(this.unsubscribe$)).subscribe(theme => this.colorTheme = theme);
  }

  ngOnDestroy(): void {
    this.unsubscribe$?.next();
    this.unsubscribe$.complete();
  } 
}
