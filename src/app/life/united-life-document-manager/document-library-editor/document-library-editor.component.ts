import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';
import { EditType } from '../models/edit-type-enum';
import { FormModel } from '../models/form-model';

@Component({
  selector: 'app-document-library-editor',
  templateUrl: './document-library-editor.component.html',
  styleUrls: ['./document-library-editor.component.css']
})
export class DocumentLibraryEditorComponent implements OnInit {
  @Input() editType: EditType = EditType.Unknown;

  isAddForm = false;
  isEditForm = false;
  isAddFormVersion = false;
  isEditFormVersion = false;

  states: SelectItem[] = [];
  products: SelectItem[] = [];
  producers: SelectItem[] = [];

  availableFormEditionMonths: SelectItem[] = [];
  availableFormEditionYears: SelectItem[] = [];
  availableSelectOptions: SelectItem[] = [];
  availableStates: SelectItem[] = [];
  availableStatesSelected: SelectItem[] = [];
  availableTypes: SelectItem[] = [];
  availableCategories: SelectItem[] = [];
  availablePrefixes: SelectItem[] = [];
  availableFormSuffixes: SelectItem[] = [];
  availableFormSuffixesState: SelectItem[] = [];
  availableFormSuffixesAgency: SelectItem[] = [];
  availableWebFormSystems: SelectItem[] = [];
  availableProducts: SelectItem[] = [];
  availableProductsSelected: SelectItem[] = [];
  availableProducers: SelectItem[] = [];
  availableProducersSelected: SelectItem[] = [];
  availableProductTypeAndStates: SelectItem[] = [];
  availableQuestions: SelectItem[] = [];

  addFormModel = new FormModel();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.isAddForm = false;
    this.isEditForm = false;
    this.isAddFormVersion = false;
    this.isEditFormVersion = false;
    this.loadData();

    switch (this.editType) {
      case EditType.AddForm:
        // Don't currently need to do anything here
        this.isAddForm = true;
        break;
      case EditType.EditForm:
        this.isEditForm = true;
        break;
      case EditType.AddFormVersion:
        this.isAddFormVersion = true;
        break;
      case EditType.EditFormVersion:
        this.isEditFormVersion = true;
        break;
    }
  }

  loadData(): void {
    this.availableFormEditionMonths = this.dataService.getFormEditionMonths();
    this.availableFormEditionYears = this.dataService.getFormEditionYears();
    this.availableSelectOptions = this.dataService.getFormSelectItems();
    this.states = this.dataService.getFormStates();
    this.availableStates = [...this.states];
    this.availableStatesSelected = [];
    this.availableTypes = this.dataService.getFormTypes();
    this.availableCategories = this.dataService.getFormCategories();
    this.availablePrefixes = this.dataService.getFormPrefixes();
    this.availableFormSuffixes = this.dataService.getFormSuffixes();
    this.availableFormSuffixesState = this.dataService.getFormSuffixesState();
    this.availableFormSuffixesAgency = this.dataService.getFormSuffixesAgency();
    this.availableWebFormSystems = this.dataService.getFormWebFormSystems();
    this.products = this.dataService.getFormProducts();
    this.availableProducts = [...this.products];
    this.availableProductsSelected = [];
    this.producers = this.dataService.getFormProducers();
    this.availableProducers = [...this.producers];
    this.availableProducersSelected = [];
    this.availableProductTypeAndStates = this.dataService.getFormNbbProductTypeAndStates();
    this.availableQuestions = this.dataService.getFormNbbQuestions();
  }

}
