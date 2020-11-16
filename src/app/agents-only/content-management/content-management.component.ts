import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

export interface ProducerGroup {
  agencyId: string;
  agencyName: string;
}

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.css']
})
export class ContentManagementComponent implements OnInit {
  groupToAffect = '';
  disableAdd = true;
  disableDelete = true;
  activeViewIndex: number;
  producerGroups: SelectItem[] = [
    { value: '150052', label: '15-0052 Home Office' },
    { value: '351000', label: '35-1000 Cetera Investment Services Llc' },
    { value: '901000', label: '90-1000 Infinex Investments Inc' },
    { value: '910001', label: '91-0001 91-0001' },
    { value: '913001', label: '91-3001 91-3001' },
    { value: '915001', label: '91-5001 91-5001' }
  ];
  allNumericRegex: RegExp;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.disableAdd = true;
    this.disableDelete = true;
    this.allNumericRegex = new RegExp('^\d{6}$');
    this.activeViewIndex = 0;
    const lsTabIndex = localStorage.getItem('cmcTabIndex');
    if (lsTabIndex) {
      this.activeViewIndex = parseInt(lsTabIndex, 10);
    }
  }

  onChange(event): void {
    console.log('onChange');
    console.log('  Value: ' + event.target.value);
    // const isGrp = this.allNumericRegex.test(event.target.value);
    const isGrp = /^\d{6}$/.test(event.target.value);
    const grpExists = this.groupExists(event.target.value);
    console.log('  Is Group: ' + isGrp);
    console.log('  Group Exists: ' + grpExists);
    if (!isGrp) {
      this.disableAdd = true;
      this.disableDelete = true;
    } else {
      this.disableAdd = grpExists;
      this.disableDelete = !grpExists;
    }
  }

  onInput(event): void {
    console.log('onInput');
    console.log('  Value: ' + event.target.value);
    // const isGrp = this.allNumericRegex.test(event.target.value);
    const isGrp = /^\d{6}$/.test(event.target.value);
    const grpExists = this.groupExists(event.target.value);
    console.log('  Is Group: ' + isGrp);
    console.log('  Group Exists: ' + grpExists);
    if (!isGrp) {
      this.disableAdd = true;
      this.disableDelete = true;
    } else {
      this.disableAdd = grpExists;
      this.disableDelete = !grpExists;
    }
  }

  addGroup(): void {
    console.log('addGroup()');
  }

  deleteGroup(): void {
    this.confirmationService.confirm({
      header: 'Delete Producer Group',
      message: 'Are you sure that you want to delete this producer group? [' + this.groupToAffect + ']',
      accept: () => {
        console.log('deleted producer group: ' + this.groupToAffect);
      }
    });
  }

  loadProducerGroup(event): void {
    console.log('loadProducerGroup()');
    console.log('  value: ' + event.value);
    this.groupToAffect = event.value;
    this.disableAdd = true;
    this.disableDelete = false;
  }

  private groupExists(group: string): boolean {
    const grp = this.producerGroups.find(item => {
      console.log('  value checked: ' + item.value);
      return item.value === group;
    });
    const isGrp = !!(grp);
    return isGrp;
  }

  tabSelected(event): void {
    localStorage.setItem('cmcTabIndex', event.index + '');
  }

}
