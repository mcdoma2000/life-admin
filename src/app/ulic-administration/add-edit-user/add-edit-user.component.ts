import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';
import { UserType } from '../add-edit-user-type/add-edit-user-type.component';

export interface User {
  userId: string;
  userName: string;
  userType: UserType;
}

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  providers:[MessageService, ConfirmationService],
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  users: User[] = [];
  userTypes: UserType[] = [];

  clonedUsers: { [s: string]: User; } = {};

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.userTypes = this.dataService.getUserTypes();
    this.users = this.dataService.getUsers();
  }

  onRowEditInit(user: User): void {
    this.clonedUsers[user.userId] = {...user};
  }

  onRowEditSave(user: User): void {
    if (user.userName && user.userName.length > 0) {
      delete this.clonedUsers[user.userId];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User is updated'
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid User'
      });
    }
  }

  onRowEditCancel(user: User, index: number): void{
    this.users[index] = this.clonedUsers[user.userId];
    delete this.clonedUsers[user.userId];
  }

  onRowDelete(user: User): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this user?',
      accept: () => {
        this.users = this.users.filter(x => x.userId !== user.userId);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User has been deleted.'
        });
      }
    });
  }

}
