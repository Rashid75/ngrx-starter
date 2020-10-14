import { createUserEvent } from './../store/user.action';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createUser } from '../store/user.action';
import { UserState } from '../store/user.reducer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient,private store: Store<UserState>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  onSubmit() {
    this.store.dispatch(createUserEvent(this.form.value))
  }
}
