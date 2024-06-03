import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './list-usuarios/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
