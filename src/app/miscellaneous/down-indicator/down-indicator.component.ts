import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { MiscellaneousDataService } from 'src/app/services/miscellaneous-data.service';
import { Environment } from '../models/environment-model';
import { System } from '../models/system-model';
import { SystemStatus } from '../models/system-status-model';

@Component({
  selector: 'app-down-indicator',
  templateUrl: './down-indicator.component.html',
  styleUrls: ['./down-indicator.component.css'],
  providers: [ MessageService ]
})
export class DownIndicatorComponent implements OnInit {

  environments: Environment[] = [];
  systemStatusItems: SystemStatus[] = [];
  systems: System[] = [];
  clonedSystems: { [s: string]: System; } = {};

  constructor(private messageService: MessageService,
              private miscDataService: MiscellaneousDataService) { }

  ngOnInit(): void {
    this.environments = this.miscDataService.getEnvironments();
    this.systemStatusItems = this.miscDataService.getSystemStatusItems();
    this.systems = this.miscDataService.getSystems();
  }

  onRowEditInit(system: System): void {
    this.clonedSystems[system.id] = {...system};
  }

  onRowEditSave(system: System): void {
      delete this.clonedSystems[system.id];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User is updated'
      });
  }

  onRowEditCancel(system: System, index: number): void{
    this.systems[index] = this.clonedSystems[system.id];
    delete this.clonedSystems[system.id];
  }

}
