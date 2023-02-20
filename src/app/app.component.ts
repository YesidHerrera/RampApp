import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnectionService, ConnectionState } from 'ng-connection-service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RampApp';
  status!: string;
  currentState!: ConnectionState;
  subscription = new Subscription();

  constructor(private connectionService: ConnectionService){}

  ngOnInit(): void {
    this.subscription.add(
      this.connectionService.monitor().pipe(
        tap((newState: ConnectionState) => {
          this.currentState = newState;

          if (this.currentState.hasNetworkConnection) {
            this.status = 'ONLINE';
          } else {
            this.status = 'OFFLINE';
          }
        })
      ).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
