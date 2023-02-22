import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  private colorTheme = new BehaviorSubject<string>('primary');

  setColorTheme(theme: string) {
    this.colorTheme.next(theme);
  }

  getColorTheme() {
    return this.colorTheme.asObservable();
  }

  
}
