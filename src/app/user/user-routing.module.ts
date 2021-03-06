import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
