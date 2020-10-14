import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './user.service';


@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('user',userReducer),
    EffectsModule.forFeature([UserEffect])
  ]
})
export class UserModule { }
