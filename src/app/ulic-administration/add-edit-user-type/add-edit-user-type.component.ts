import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';

export interface UserType {
  id: string;
  typeName: string;
}

@Component({
  selector: 'app-add-edit-user-type',
  templateUrl: './add-edit-user-type.component.html',
  providers: [MessageService],
  styles: [`
    :host ::ng-deep .p-cell-editing {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  `]
})
export class AddEditUserTypeComponent implements OnInit {
  userTypes: UserType[] = [];

  clonedUserTypes: { [s: string]: UserType; } = {};

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.userTypes = this.dataService.getUserTypes();
  }

  onRowEditInit(userType: UserType): void {
    this.clonedUserTypes[userType.id] = {...userType};
  }

  onRowEditSave(userType: UserType): void {
    if (userType.typeName && userType.typeName.length > 0) {
      delete this.clonedUserTypes[userType.id];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User type is updated'
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid User Type'
      });
    }
  }

  onRowEditCancel(userType: UserType, index: number): void{
    this.userTypes[index] = this.clonedUserTypes[userType.id];
    delete this.clonedUserTypes[userType.id];
  }

  onRowDelete(utype): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this user type?',
      accept: () => {
        this.userTypes = this.userTypes.filter(x => x.id !== utype.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'UserType has been deleted.'
        });
      }
    });
  }

}
