import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectionStatusService } from './services/connection-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RampApp';
  isMenuOpened = false;
  isOnline = false;
  connectionSubscription$?: Subscription;
  

  constructor(private connectionStatusService: ConnectionStatusService){
  }

  ngOnInit(): void {
    this.connectionSubscription$ = this.connectionStatusService.getOnlineStatus$().subscribe((isOnline: boolean) => {
      this.isOnline = isOnline;
    });
  }

  ngOnDestroy(): void {
    this.connectionSubscription$?.unsubscribe();
  }

}
