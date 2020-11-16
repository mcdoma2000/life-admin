import { SelectItem } from 'primeng/api';

export class ViewingRightsModel {
  products: SelectItem[];
  producerGroups: SelectItem[];

  constructor() {
    this.products = [];
    this.producerGroups = [];
  }
}
