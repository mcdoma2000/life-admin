import { Injectable } from '@angular/core';
import { Environment } from '../miscellaneous/models/environment-model';
import { System } from '../miscellaneous/models/system-model';
import { SystemStatus } from '../miscellaneous/models/system-status-model';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousDataService {

  constructor() { }

  getEnvironments(): Environment[] {
    return [
      { value: 'SQL_dbufgdev', label: 'Development' },
      { value: 'SQL_dbufgtest', label: 'Test' },
      { value: 'SQL_dbufgprod', label: 'Live - Production' }
    ];
  }

  getSystemStatusItems(): SystemStatus[] {
    return [
      { id: '1', name: 'Y', description: 'Yes' },
      { id: '2', name: 'N', description: 'No' },
      { id: '3', name: 'T', description: 'Testing' }
    ];
  }

  getSystems(): System[] {
    return [
      { id: '1', name: 'AGT', description: 'Agents Only Logon', status: { id: '2', name: 'N', description: 'No' } },
      { id: '2', name: 'BMX', description: 'Bill Matrix', status:  { id: '2', name: 'N', description: 'No' } },
      { id: '3', name: 'IMG', description: 'Image Right', status:  { id: '2', name: 'N', description: 'No' } },
      { id: '4', name: 'LIF', description: 'Life', status:  { id: '2', name: 'N', description: 'No' } },
      { id: '5', name: 'MOB', description: 'Mobile App', status: { id: '2', name: 'N', description: 'No' } },
      { id: '6', name: 'SYN', description: 'Synergy Reports', status: { id: '2', name: 'N', description: 'No' } },
      { id: '7', name: 'UWE', description: 'Umail Word/Excel Upload', status: { id: '3', name: 'T', description: 'Testing' } },
      { id: '8', name: 'WQT', description: 'Web Quote', status:  { id: '2', name: 'N', description: 'No' } }
    ];
  }
}
