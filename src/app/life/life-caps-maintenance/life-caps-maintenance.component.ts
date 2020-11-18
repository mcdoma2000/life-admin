import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LifeService } from 'src/app/services/life-service';
import { LifeCaps } from '../models/life-caps-model';

@Component({
  selector: 'app-life-caps-maintenance',
  templateUrl: './life-caps-maintenance.component.html',
  styleUrls: ['./life-caps-maintenance.component.css'],
  providers: [MessageService]
})
export class LifeCapsMaintenanceComponent implements OnInit {
  lifeCaps: LifeCaps[] = [];
  clonedLifeCaps: { [s: string]: LifeCaps; } = {};

  wrongCaps = '';
  correctCaps = '';

  constructor(private messageService: MessageService,
              private lifeService: LifeService) { }

  ngOnInit(): void {
    this.lifeCaps = this.lifeService.getLifeCapsEntries();
  }

  onRowEditInit(lifeCaps: LifeCaps): void {
    this.clonedLifeCaps[lifeCaps.wrongCase] = {...lifeCaps};
  }

  onRowEditSave(lifeCaps: LifeCaps): void {
      delete this.clonedLifeCaps[lifeCaps.wrongCase];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Life Caps is updated'
      });
  }

  onRowEditCancel(lifeCaps: LifeCaps, index: number): void{
    this.lifeCaps[index] = this.clonedLifeCaps[lifeCaps.wrongCase];
    delete this.clonedLifeCaps[lifeCaps.wrongCase];
  }

}
