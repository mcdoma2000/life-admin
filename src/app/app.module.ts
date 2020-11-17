import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgentsOnlyComponent } from './agents-only/agents-only.component';
import { LifeComponent } from './life/life.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { UquoteComponent } from './uquote/uquote.component';
import { UlicAdministrationComponent } from './ulic-administration/ulic-administration.component';
import { RatesComponent } from './rates/rates.component';
import { ContentManagementComponent } from './agents-only/content-management/content-management.component';
import { ContentManagementEsolComponent } from './agents-only/content-management-esol/content-management-esol.component';
import { UserMaintenanceLifeComponent } from './agents-only/user-maintenance-life/user-maintenance-life.component';
import { UnitedLifeDocumentManagerComponent } from './life/united-life-document-manager/united-life-document-manager.component';
import { LifeAgentInquiryComponent } from './life/life-agent-inquiry/life-agent-inquiry.component';
import { LifeCapsMaintenanceComponent } from './life/life-caps-maintenance/life-caps-maintenance.component';
import { DownIndicatorComponent } from './miscellaneous/down-indicator/down-indicator.component';
import { NewMessageUpdateComponent } from './miscellaneous/new-message-update/new-message-update.component';
import { PictureGroupMaintenanceComponent } from './miscellaneous/picture-group-maintenance/picture-group-maintenance.component';
import { MobileMessageLogsComponent } from './miscellaneous/mobile-message-logs/mobile-message-logs.component';
import { MobileAppUsageTrackingLogComponent } from './miscellaneous/mobile-app-usage-tracking-log/mobile-app-usage-tracking-log.component';
import { WhatsNewLifeManagerComponent } from './miscellaneous/whats-new-life-manager/whats-new-life-manager.component';
import { UquoteRegressionToolComponent } from './uquote/uquote-regression-tool/uquote-regression-tool.component';
import { AddEditUserTypeComponent } from './ulic-administration/add-edit-user-type/add-edit-user-type.component';
import { AddEditUserComponent } from './ulic-administration/add-edit-user/add-edit-user.component';
import { AddEditSectionComponent } from './ulic-administration/add-edit-section/add-edit-section.component';
import { AddEditItemsComponent } from './ulic-administration/add-edit-items/add-edit-items.component';
import { SectionSecurityComponent } from './ulic-administration/section-security/section-security.component';
import { DeferredAnnuitiesUniComponent } from './rates/deferred-annuities-uni/deferred-annuities-uni.component';
import { SpiaScRatesComponent } from './rates/spia-sc-rates/spia-sc-rates.component';
import { SpiaAgePeriodBandsComponent } from './rates/spia-age-period-bands/spia-age-period-bands.component';
import { IndexUniversalLifeComponent } from './rates/index-universal-life/index-universal-life.component';
import { FormsModule } from '@angular/forms';
import { SelectorComponent } from './life/united-life-document-manager/selector/selector.component';
import { DocumentLibraryEditorComponent } from './life/united-life-document-manager/document-library-editor/document-library-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgentsOnlyComponent,
    LifeComponent,
    MiscellaneousComponent,
    UquoteComponent,
    UlicAdministrationComponent,
    RatesComponent,
    ContentManagementComponent,
    ContentManagementEsolComponent,
    UserMaintenanceLifeComponent,
    UnitedLifeDocumentManagerComponent,
    LifeAgentInquiryComponent,
    LifeCapsMaintenanceComponent,
    DownIndicatorComponent,
    NewMessageUpdateComponent,
    PictureGroupMaintenanceComponent,
    MobileMessageLogsComponent,
    MobileAppUsageTrackingLogComponent,
    WhatsNewLifeManagerComponent,
    UquoteRegressionToolComponent,
    AddEditUserTypeComponent,
    AddEditUserComponent,
    AddEditSectionComponent,
    AddEditItemsComponent,
    SectionSecurityComponent,
    DeferredAnnuitiesUniComponent,
    SpiaScRatesComponent,
    SpiaAgePeriodBandsComponent,
    IndexUniversalLifeComponent,
    SelectorComponent,
    DocumentLibraryEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    AccordionModule,
    PanelModule,
    InputTextModule,
    ListboxModule,
    ButtonModule,
    InputMaskModule,
    DialogModule,
    ConfirmDialogModule,
    RippleModule,
    InputTextareaModule,
    SelectButtonModule,
    FieldsetModule,
    FileUploadModule,
    DropdownModule,
    RadioButtonModule,
    ContextMenuModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    FormsModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
