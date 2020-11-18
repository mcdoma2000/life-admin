import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { LifeService } from 'src/app/services/life-service';
import { Agent } from '../models/agent-model';

@Component({
  selector: 'app-life-agent-inquiry',
  templateUrl: './life-agent-inquiry.component.html',
  styleUrls: ['./life-agent-inquiry.component.css'],
  providers: [MessageService]
})
export class LifeAgentInquiryComponent implements OnInit {
  srchLastName = '';
  srchFirstName = '';
  srchAgentNumber = '';
  agents: Agent[] = [];
  loading = false;
  @ViewChild(Table, {static: false}) agentsTable: Table;

  constructor(private lifeService: LifeService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.loading = true;
    this.agents = this.lifeService.searchAgents(this.srchLastName, this.srchFirstName, this.srchAgentNumber);
    this.agentsTable.reset();
    this.loading = false;
  }

  reset(): void {
    this.srchAgentNumber = '';
    this.srchFirstName = '';
    this.srchLastName = '';
    this.agents = [];
  }

  activeFilterOnChange(table: Table, event, fieldName: string, searchMode: string): void {
    if (event.value) {
      table.filter(event.value, 'active', 'equals');
    } else {
      table.reset();
    }
  }

}
