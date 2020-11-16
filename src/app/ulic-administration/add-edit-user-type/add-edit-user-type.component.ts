import { Component, OnInit } from '@angular/core';

export interface UserType {
  typeName: string;
}

@Component({
  selector: 'app-add-edit-user-type',
  templateUrl: './add-edit-user-type.component.html',
  styleUrls: ['./add-edit-user-type.component.css']
})
export class AddEditUserTypeComponent implements OnInit {
  userTypes: UserType[] = [
    { typeName: 'Help Desk' },
    { typeName: 'Help Desk Plus' },
    { typeName: 'Life Support' },
    { typeName: 'LifeAdmin' },
    { typeName: 'LifeAdmin Plus' },
    { typeName: 'LifeImpersonation' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
