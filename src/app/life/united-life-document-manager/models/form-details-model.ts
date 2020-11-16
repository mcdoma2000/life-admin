export class FormDetailsModel {
  formName: string;
  formNumber: string;
  keywords: string;
  application: boolean;
  pdfFile: string;
  formEditionMonth: string;
  formEditionYear: string;
  webFormSystem: string;
  prefix: string;
  formSuffix: string;
  formSuffixState: string;
  formSuffixAgency: string;
  isOrderable: boolean;

  constructor() {
    this.formName = '';
    this.formNumber = '';
    this.keywords = '';
    this.application = false;
    this.pdfFile = '';
    this.formEditionMonth = '';
    this.formEditionYear = '';
    this.webFormSystem = '';
    this.prefix = '';
    this.formSuffix = '';
    this.formSuffixState = '';
    this.formSuffixAgency = '';
    this.isOrderable = false;
  }
}
