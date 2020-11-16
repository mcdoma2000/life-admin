// https://stackoverflow.com/questions/50618050/how-to-create-custom-input-component-with-ngmodel-working-in-angular-6/50723598
// https://stackoverflow.com/questions/49749480/using-inner-ngmodel-for-a-generic-control/49749903#49749903
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorComponent),
      multi: true
    }
  ]
})
export class SelectorComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() items: SelectItem[];
  @Input() label: string;
  @Output() selectionChanged = new EventEmitter<SelectItem[]>();

  availableItems: SelectItem[] = [];
  selectedAvailableItems: SelectItem[] = [];

  selectedItems: SelectItem[] = [];
  selectedSelectedItems: SelectItem[] = [];

  constructor() { }

  sortItemsMethod(a: SelectItem, b: SelectItem): number {
    let aval = a.value;
    if (aval === 'All') {
      aval = '000000';
    } else if (aval === 'AllBut') {
      aval = '000001';
    }
    let bval = b.value;
    if (bval === 'All') {
      bval = '000000';
    } else if (bval === 'AllBut') {
      bval = '000001';
    }
    return aval.localeCompare(bval);
  }

  ngOnInit(): void {
    this.availableItems = [];
    this.availableItems.push(...this.items);
    this.availableItems.sort((a, b) => this.sortItemsMethod(a, b));
  }

  ngOnDestroy(): void {
  }

  onAvailableDblClick(event): void {
    const itemToMove = event.option;
    const newSelectedItems: SelectItem[] = [];
    const newAvailableItems: SelectItem[] = [];
    this.availableItems = this.availableItems.filter(x => x.value !== event.option.value);

    if (itemToMove.value === 'All') {
      if (this.selectedItems && this.selectedItems.length > 0) {
        newAvailableItems.push(...this.availableItems);
        newAvailableItems.push(...this.selectedItems);
        newAvailableItems.sort((a, b) => this.sortItemsMethod(a, b));
        this.availableItems = newAvailableItems.sort((a, b) => this.sortItemsMethod(a, b));
      }
      this.selectedItems = [];
      newSelectedItems.push(itemToMove);
    } else {
      newSelectedItems.push(...this.selectedItems);
      newSelectedItems.push(itemToMove);
      const selectedAllItem = this.selectedItems.find(x => x.value === 'All');
      if (selectedAllItem && selectedAllItem.value === 'All') {
        this.availableItems.push(selectedAllItem);
        this.availableItems.sort((a, b) => this.sortItemsMethod(a, b));
      }
      newSelectedItems.sort((a, b) => this.sortItemsMethod(a, b));
    }
    this.writeValue(newSelectedItems);
  }

  onSelectedDblClick(event): void {
    const itemToMove = event.option;
    const newAvailableItems: SelectItem[] = [];
    newAvailableItems.push(...this.availableItems);
    newAvailableItems.push(itemToMove);
    newAvailableItems.sort((a, b) => this.sortItemsMethod(a, b));
    this.availableItems = [];
    this.availableItems.push(...newAvailableItems);

    const newSelectedItems = this.selectedItems.filter(x => x.value !== event.value);
    this.writeValue(newSelectedItems);
  }

  selectItems(): void {
    if (this.availableItems.length === 0) {
      // No items to select
      return;
    }
    if (this.selectedAvailableItems.length === 0) {
      // No items selected in UI
      return;
    }
    const newSelectedItems = [];
    newSelectedItems.push(...this.selectedItems);
    newSelectedItems.push(...this.availableItems.filter(x => this.selectedAvailableItems.includes(x.value)));
    newSelectedItems.sort((a, b) => this.sortItemsMethod(a, b));

    const newAvailableItems = this.availableItems.filter(x => !this.selectedAvailableItems.includes(x.value));
    this.availableItems = [];
    this.availableItems.push(...newAvailableItems);
    this.selectedAvailableItems = [];
    this.writeValue(newSelectedItems);
  }

  canSelectItem(): boolean {
    if (this.selectedAvailableItems.length > 0) {
      return true;
    }
    return false;
  }

  canSelectAllItems(): boolean {
    const selectedAllItem = this.selectedItems.find(x => x.value === 'All');
    const availableAllItem = this.availableItems.find(x => x.value === 'All');
    if (selectedAllItem) {
      return false;
    }
    if (this.selectedAvailableItems.length === 0) {
      return false;
    }
    if (availableAllItem) {
      return true;
    }
    if (this.availableItems.length > 0) {
        return true;
    }
    return false;
  }

  canUnselectItem(): boolean {
    if (this.selectedSelectedItems.length > 0) {
      return true;
    }
    return false;
  }

  canUnselectAllItems(): boolean {
    if (this.selectedItems.length > 0) {
      return true;
    }
    return false;
  }

  selectAllItems(): void {
    if (!this.canSelectAllItems()) {
      console.log('unable to select all');
      return;
    }
    const availableAllItem = this.availableItems.find(x => x.value === 'All');
    const selectedAllItem = this.selectedItems.find(x => x.value === 'All');
    const newAvailableItems: SelectItem[] = [];
    const newSelectedItems: SelectItem[] = [];

    if (selectedAllItem) {
      // All is already selected
      return;
    }
    if (availableAllItem) {
      newAvailableItems.push(...this.selectedItems);

    } else {

    }
    newSelectedItems.push(...this.selectedItems);
    newSelectedItems.push(...this.availableItems);
    newSelectedItems.sort((a, b) => this.sortItemsMethod(a, b));

    this.availableItems = [];
    this.selectedAvailableItems = [];
    this.selectedSelectedItems = [];
    this.writeValue(newSelectedItems);
  }

  unselectItems(): void {
    if (this.selectedItems.length === 0) {
      // No items selected
      return;
    }
    if (this.selectedSelectedItems.length === 0) {
      // No items selected in UI to unselect
      return;
    }
    let newAvailableItems = [];
    newAvailableItems.push(...this.availableItems);
    newAvailableItems.push(...this.selectedSelectedItems);
    newAvailableItems = newAvailableItems.sort((a, b) => this.sortItemsMethod(a, b));
    const values = this.selectedSelectedItems.map(x => x.value);
    const newSelectedItems = this.selectedItems.filter(x => !values.includes(x.value));
    this.selectedItems = [...newSelectedItems].sort((a, b) => this.sortItemsMethod(a, b));
    this.selectedSelectedItems = [];
    this.writeValue(newSelectedItems);
  }

  unselectAllItems(): void {
    const newAvailableItems = [];
    newAvailableItems.push(...this.availableItems);
    newAvailableItems.push(...this.selectedItems);
    this.availableItems = [];
    this.availableItems.push(...newAvailableItems);
    this.availableItems.sort((a, b) => this.sortItemsMethod(a, b));

    this.selectedItems = [];
    this.selectedSelectedItems = [];
    this.writeValue(this.selectedItems);
  }


  // Invoked when the model has been changed
  onChange: (_: any) => void = (_: any) => { this.selectionChanged.emit(this.selectedItems); };

  // Invoked when the model has been touched
  onTouched: () => void = () => {};

  // Method that is invoked on an update of a model.
  updateChanges(): void {
    this.onChange(this.selectedItems);
    this.selectionChanged.emit(this.selectedItems);
  }

  // OVERRIDES //

  // Writes a new item to the element.
  writeValue(items: SelectItem[]): void {
    this.selectedItems = [];
    if (items && items.length) {
      this.selectedItems.push(...items);
    }
    this.updateChanges();
  }

  // Registers a callback function that should be called when the control's value changes in the UI.
  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  // Registers a callback function that should be called when the control receives a blur event.
  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }
}
