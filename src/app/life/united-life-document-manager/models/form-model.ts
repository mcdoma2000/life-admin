import { ViewingRightsModel } from './viewing-rights-model';
import { FormDetailsModel } from './form-details-model';
import { DocumentLibraryDetailsModel } from './document-library-details-model';
import { NewBusinessBuilderDetailsModel } from './new-business-builder-details-model';

export class FormModel {
  formDetails: FormDetailsModel;
  viewingRightsDetails: ViewingRightsModel;
  documentLibraryDetails: DocumentLibraryDetailsModel;
  newBusinessBuilderDetails: NewBusinessBuilderDetailsModel;

  constructor() {
    this.formDetails = new FormDetailsModel();
    this.viewingRightsDetails = new ViewingRightsModel();
    this.documentLibraryDetails = new DocumentLibraryDetailsModel();
    this.newBusinessBuilderDetails = new NewBusinessBuilderDetailsModel();
  }
}


