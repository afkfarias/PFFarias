import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './list-usuarios/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UsersComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
