import { getUserEvent } from './../store/user.action';
import { UserState } from './../store/user.reducer';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers } from '../store/user.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: Array<any> = [];
  constructor(private http: HttpClient, private store: Store<UserState>) {}

  ngOnInit(): void {
    const users = this.store.select(selectUsers);
    users.subscribe((data) => {
      this.users = data;
    });
    if (this.users.length > 0) return;
    this.store.dispatch(getUserEvent());
  }
}
