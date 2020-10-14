import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { login, logout } from './store/app.action';
import { AppState } from './store/app.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status$: Observable<any>;
  isAuthenticated: boolean;
  constructor(private store: Store<{ root: any }>) {
    this.status$ = store.select('root');
    this.status$.subscribe((response) => {
      this.isAuthenticated = response.isAuthenticated;
    });
  }
  ngOnInit() {}
  login() {
    this.store.dispatch(login());
  }
  logout() {
    this.store.dispatch(logout());
  }
}
