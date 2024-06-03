import { Component, OnInit } from '@angular/core';
import { IUser } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import Swal from 'sweetalert2';
import { UsersService } from '../../../core/usuarios/users.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLoadingUsers } from '../store/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'address',
    'phone',
    'role',
    'createdAt',
    'actions',
  ];

  loading = false;
  loadingUsers$ : Observable<boolean>;

  users: IUser[] = [];

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
    private store: Store
  ) {
    this.loadingUsers$ = this.store.select(selectLoadingUsers);
  }

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        console.log('next: ', users);
        this.users = users;
      },
      error: (err) => {
        console.log('error: ', err);
        Swal.fire('Error', 'Ocurrio un error', 'error');
      },
      complete: () => {
        console.log('complete');
        this.loading = false;
      },
    });
  }

  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(UserDetailComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
              // ACTUALIZAR EL USUARIO EN EL ARRAY
              this.users = this.users.map((u) =>
                u.id === editingUser.id ? { ...u, ...result } : u
              );
            } else {
              // LOGICA DE CREAR EL USUARIO
              result.createdAt = new Date();
              this.usersService.createUser(result).subscribe({
                next: (usuarioCreado) => {
                  this.users = [...this.users, usuarioCreado];
                },
              });
            }
          }
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('Esta seguro?')) {
      this.users = this.users.filter((u) => u.id != id);
    }
  }
}
