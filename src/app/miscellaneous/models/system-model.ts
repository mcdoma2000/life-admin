import { SystemStatus } from './system-status-model';

export interface System {
  id: string;
  name: string;
  description: string;
  status: SystemStatus;
}
