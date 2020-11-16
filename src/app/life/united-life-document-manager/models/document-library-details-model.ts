import { SelectItem } from 'primeng/api';

export class DocumentLibraryDetailsModel {
  states: SelectItem[];
  types: SelectItem[];
  categories: SelectItem[];

  constructor() {
    this.states = [];
    this.types = [];
    this.categories = [];
  }
}
