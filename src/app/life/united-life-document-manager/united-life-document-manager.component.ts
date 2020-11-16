import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormDetailsModel } from './models/form-details-model';
import { FormModel } from './models/form-model';

@Component({
  selector: 'app-united-life-document-manager',
  templateUrl: './united-life-document-manager.component.html',
  styleUrls: ['./united-life-document-manager.component.css']
})
export class UnitedLifeDocumentManagerComponent implements OnInit {
  availableFormEditionMonths: SelectItem[] = [
    { value: '', label: 'Select Month'},
    { value: '01', label: 'January (01)'},
    { value: '02', label: 'February (02)'},
    { value: '03', label: 'March (03)'},
    { value: '04', label: 'April (04)'},
    { value: '05', label: 'May (05)'},
    { value: '06', label: 'June (06)'},
    { value: '07', label: 'July (07)'},
    { value: '08', label: 'August (08)'},
    { value: '09', label: 'Septembar (09)'},
    { value: '10', label: 'October (10)'},
    { value: '11', label: 'November (11)'},
    { value: '12', label: 'December (12)'}
  ];
  availableFormEditionYears: SelectItem[] = [
    { value: '', label: 'Select Year' },
    { value: '21', label: '2021' },
    { value: '20', label: '2020' },
    { value: '19', label: '2019' },
    { value: '18', label: '2018' },
    { value: '17', label: '2017' },
    { value: '16', label: '2016' },
    { value: '15', label: '2015' },
    { value: '14', label: '2014' },
    { value: '13', label: '2013' },
    { value: '12', label: '2012' },
    { value: '11', label: '2011' },
    { value: '10', label: '2010' },
    { value: '09', label: '2009' },
    { value: '08', label: '2008' },
    { value: '07', label: '2007' },
    { value: '06', label: '2006' },
    { value: '05', label: '2005' },
    { value: '04', label: '2004' },
    { value: '03', label: '2003' },
    { value: '02', label: '2002' },
    { value: '01', label: '2001' },
    { value: '00', label: '2000' },
    { value: '97', label: '1997' },
    { value: '93', label: '1993' },
    { value: '92', label: '1992' },
    { value: '91', label: '1991' },
    { value: '84', label: '1984' },
    { value: '82', label: '1982' },
  ];
  availableSelectOptions: SelectItem[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];
  states: SelectItem[] = [
    { value: 'AZ', label: 'Arizona' },
    { value: 'AL', label: 'Alabama' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hanpshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennesee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'DC', label: 'Washington D.C.' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' }
  ];
  availableStates: SelectItem[] = [...this.states];
  availableStatesSelected: SelectItem[] = [];
  availableTypes: SelectItem[] = [
    { value: '1', label: 'Annuities' },
    { value: '2', label: 'Riders' },
    { value: '4', label: 'Term Life' },
    { value: '32', label: 'Whole Life' }
  ];
  availableCategories: SelectItem[] = [
    { value: '1', label: 'Claims' },
    { value: '2', label: 'Company & Contracting Info' },
    { value: '4', label: 'Marketing & Sales Materials' },
    { value: '8', label: 'Needs Analysis & Prospecting Letter' },
    { value: '16', label: 'New Business Apps & Forms' },
    { value: '32', label: 'Policy Service Forms' },
    { value: '64', label: 'Underwriting' }
  ];
  availablePrefixes: SelectItem[] = [
    { value: '0', label: '(None)' },
    { value: '17', label: 'ICC17' },
    { value: '16', label: 'ICC16' },
    { value: '15', label: 'ICC15' },
    { value: '14', label: 'ICC14' },
    { value: '13', label: 'ICC13' },
    { value: '12', label: 'ICC12' },
  ];
  availableFormSuffixes: SelectItem[] = [
    { value: '0',  label: '(None)' },
    { value: '2',  label: 'A    - Agent Only' },
    { value: '3',  label: 'B    - Brochure' },
    { value: '4',  label: 'BNK  - Bank' },
    { value: '5',  label: 'C    - Client Friendly' },
    { value: '11', label: 'C    - Compact Approved' },
    { value: '6',  label: 'F    - Flyer' },
    { value: '7',  label: 'FP   - FPDA' },
    { value: '8',  label: 'S    - Stuffer' },
    { value: '13', label: 'SPWL - SPWL' },
    { value: '10', label: 'X    - Example' }
  ];
  availableFormSuffixesState: SelectItem[] = this.states.map(st => {
    return { value: st.value, label: st.value };
  });
  availableFormSuffixesAgency: SelectItem[] = [
    { value: '', label: '(None)' },
    { value: 'ICA', label: '311000 - Investment Centers' },
    { value: 'DC', label: '345000 -  Dynamic Consultants' },
    { value: 'CIS', label: '351000 - Cetera Investment Services LLS' },
  ];
  availableWebFormSystems: SelectItem[] = [
    { value: '', label: 'Select Web Form System' },
    { value: 'D', label: 'Document Library (and NBB)' },
    { value: 'E', label: 'Eapp' }
  ];
  products: SelectItem[] = [
    { value: 'All', label: 'Display for All Products' },
    { value: 'SE2041', label: 'Access SPDA 4' },
    { value: 'SE2061', label: 'Access SPDA 6' },
    { value: '10T013', label: 'Annual Renewable Term 5,10,20 Yr RT' },
    { value: '20D004', label: 'FPDA' },
    { value: '20IANN', label: 'Income Annuity' },
    { value: '10U009', label: 'Legacy Accel IUL' },
    { value: '10T020', label: 'Legacy Choice' },
    { value: 'SE2032', label: 'Performance SPDA 3' },
    { value: 'SE2052', label: 'Performance SPDA 5' },
    { value: 'SE2072', label: 'Performance SPDA 7' },
    { value: '10T016', label: 'SPWL' },
    { value: 'SE2004', label: 'Wealth Choice U Series 10' },
    { value: 'SE2054', label: 'Wealth Choice U Series 5' },
    { value: 'SE2074', label: 'Wealth Choice U Serice 7' },
    { value: '10T018', label: 'Whole Life, 5, 10, & 20 Pay WL' }
  ];
  availableProducts: SelectItem[] = [...this.products];
  availableProductsSelected: SelectItem[] = [];
  producers: SelectItem[] = [
    { value: 'All', label: 'Display for All Producers' },
    { value: 'AllBut', label: 'All Other Producers (Outside of Groups Listed Here)' },
    { value: '150052', label: 'Home Office' },
    { value: '351000', label: 'Cetera Investment Services LLC' },
    { value: '901000', label: 'Infinex Investments Inc' },
    { value: '910001', label: '910001' },
    { value: '913001', label: '913001' },
    { value: '915001', label: '915001' }
  ];
  availableProducers: SelectItem[] = [...this.producers];
  availableProducersSelected: SelectItem[] = [];

  availableProductTypeAndStates: SelectItem[] = [
    { value: '1', label: 'Single Premium Deferred Annuity' },
    { value: '2', label: 'Income Annuity (SPIA)' },
    { value: '4', label: 'SPDA Renewal' },
    { value: '7', label: 'Flexible Premium Deferred Annuity' },
    { value: '9', label: 'Access SPDS-4, -6' },
    { value: '10', label: 'Performance SPDA-3, -5, -7 with MVA' },
    { value: '11', label: 'WealthChoice FIA' },
    { value: '16', label: 'Term Life' },
    { value: '12', label: 'Index Universal Life' },
    { value: '32', label: 'Universal Life' },
    { value: '64', label: 'VIP' },
    { value: '3', label: 'Limited Pay Whole Life' },
    { value: '5', label: 'Graded Benefit Whole Life' },
    { value: '6', label: 'SPIA to fund SPWL or LPWL' },
    { value: '8', label: 'Single Premium Whole Life' },
    { value: '128', label: 'Traditional Whole Life' },
  ];
  availableQuestions: SelectItem[] = [
    { value: '0', label: '(No Question)' },
    { value: '16', label: 'Does the proposed insured have existing life insurance policies or annuities with this or any other company?' },
    { value: '1', label: 'Does the proposed insured intend to replace any existing coverage?' },
    { value: '11', label: 'Is this replacing an existing policy with United Life?' },
    { value: '12', label: 'If replacing, does applicant want to complete the optional comparative information form?' },
    { value: '17', label: 'Does the applicant intend to do a 1035 exchange or qualified transfer of funds?' },
    { value: '23', label: 'Are the funds qualified AND you are required to provide a BICE through your Broker-Dealer?' },
    { value: '24', label: 'Are the funds qualified AND you are NOT involved with a Broker-Dealer BICE agreement?' },
    { value: '22', label: 'Does the applicant intend to transfer funds from a CD, mutual fund, or other type of account that is non-insurance/non-annuity?' },
    { value: '15', label: 'Is this a partial transfer from a deferred annuity with a SPIA payout of at least 10 years?' },
    { value: '19', label: 'Is this a Roth IRA' },
    { value: '27', label: 'Is the face amount greater than or equal to $25,000?' },
    { value: '18', label: 'Is the face amount greater than or equal to $50,000?' },
    { value: '21', label: 'Is the face amount greater than or equal to $1,000,000?' },
    { value: '9', label: 'Are you using United Life\'s optional TeleUnderwriting program?' },
    { value: '2', label: 'Is the owner age 65 or older?' },
    { value: '20', label: 'Does the applicant intend to take distributions from the policy and have it direct deposited into their bank account?' },
    { value: '13', label: 'Is the mode of payment EFT?' },
    { value: '10', label: 'Will you be submitting this case by fax?' },
    { value: '14', label: 'Are you adding the Qualified Care rider to this plan?' },
    { value: '5', label: 'Is the Disability Income Rider (to age 65 benefit) being added?' },
    { value: '6', label: 'Is the Disability Income Rider (limited 2 year benefit) being added?' },
    { value: '7', label: 'Is the Disability Income Rider (to age 65 benefit) being added for the Other Insured?' },
    { value: '8', label: 'Is the Disability Income Rider (limited 2 year benefit) being added for the Other Insured?' },
    { value: '3', label: 'Is a Power of Attorney (POA) signing on behalf of the owner?' },
    { value: '4', label: 'Is the owner a Trust?' },
    { value: '25', label: 'Is the proposed insured unable to read and/or understand the English Language?' },
    { value: '26', label: 'Are you adding the children’s insurance rider?' }
  ];

  addFormModel = new FormModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAvailProductsDblClick(event): void {
    console.log('onAvailProductsDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onSelectedProductsDblClick(event): void {
    console.log('onSelectedProductsDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onAvailProducersDblClick(event): void {
    console.log('onAvailProducersDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onSelectedProducersDblClick(event): void {
    console.log('onSelectedProducersDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onAvailStatesDblClick(event): void {
    console.log('onAvailStatesDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onSelectedStatesDblClick(event): void {
    console.log('onSelectedStatesDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onAvailTypesDblClick(event): void {
    console.log('onAvailTypesDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onSelectedTypesDblClick(event): void {
    console.log('onSelectedTypesDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onAvailCategoriesDblClick(event): void {
    console.log('onAvailCategoriesDblClick(event)');
    console.log('  value: ' + event.value);
  }

  onSelectedCatagoriesDblClick(event): void {
    console.log('onSelectedCatagoriesDblClick(event)');
    console.log('  value: ' + event.value);
  }

  moveProductsFromAvailableToSelected(): void {

  }

  moveAllProductsFromAvailableToSelected(): void {

  }

  moveProductsFromSelectedToAvailable(): void {

  }

  moveAllProductsFromSelectedToAvailable(): void {

  }

  moveProducersFromAvailableToSelected(): void {

  }

  moveAllProducersFromAvailableToSelected(): void {

  }

  moveProducersFromSelectedToAvailable(): void {

  }

  moveAllProducersFromSelectedToAvailable(): void {

  }

  moveStatesFromAvailableToSelected(): void {

  }

  moveAllStatesFromAvailableToSelected(): void {
    this.availableStatesSelected = [...this.availableStates];
    this.addFormModel.documentLibraryDetails.states = [...this.availableStatesSelected];
  }

  moveStatesFromSelectedToAvailable(): void {

  }

  moveAllStatesFromSelectedToAvailable(): void {
    this.addFormModel.documentLibraryDetails.states = [];
    this.availableStatesSelected = [];
  }

  moveTypesFromAvailableToSelected(): void {

  }

  moveAllTypesFromAvailableToSelected(): void {

  }

  moveTypesFromSelectedToAvailable(): void {

  }

  moveAllTypesFromSelectedToAvailable(): void {

  }

  moveCategoriesFromAvailableToSelected(): void {

  }

  moveAllCategoriesFromAvailableToSelected(): void {

  }

  moveCategoriesFromSelectedToAvailable(): void {

  }

  moveAllCategoriesFromSelectedToAvailable(): void {

  }

}
