import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  createUser,
  getUser,
  getUserEvent,
  createUserEvent,
} from './store/user.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  getAttendees$ = this.actions$.pipe(
    ofType(getUserEvent),
    switchMap(() =>
      this.http
        .get('https://jsonplaceholder.typicode.com/users')
        .pipe(map((users) => getUser({ payload: users })))
    )
  );
  @Effect()
  saveUser$ = this.actions$.pipe(
    ofType(createUserEvent),
    switchMap((data) =>
      this.http.post('https://jsonplaceholder.typicode.com/users', data).pipe(
        map((users) => {
          return createUser({ payload: users });
        })
      )
    )
  );
}
