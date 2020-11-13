import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsOnlyComponent } from './agents-only/agents-only.component';
import { ContentManagementEsolComponent } from './agents-only/content-management-esol/content-management-esol.component';
import { ContentManagementComponent } from './agents-only/content-management/content-management.component';
import { UserMaintenanceLifeComponent } from './agents-only/user-maintenance-life/user-maintenance-life.component';
import { HomeComponent } from './home/home.component';
import { LifeAgentInquiryComponent } from './life/life-agent-inquiry/life-agent-inquiry.component';
import { LifeCapsMaintenanceComponent } from './life/life-caps-maintenance/life-caps-maintenance.component';
import { LifeComponent } from './life/life.component';
import { UnitedLifeDocumentManagerComponent } from './life/united-life-document-manager/united-life-document-manager.component';
import { DownIndicatorComponent } from './miscellaneous/down-indicator/down-indicator.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { MobileAppUsageTrackingLogComponent } from './miscellaneous/mobile-app-usage-tracking-log/mobile-app-usage-tracking-log.component';
import { MobileMessageLogsComponent } from './miscellaneous/mobile-message-logs/mobile-message-logs.component';
import { NewMessageUpdateComponent } from './miscellaneous/new-message-update/new-message-update.component';
import { PictureGroupMaintenanceComponent } from './miscellaneous/picture-group-maintenance/picture-group-maintenance.component';
import { WhatsNewLifeManagerComponent } from './miscellaneous/whats-new-life-manager/whats-new-life-manager.component';
import { DeferredAnnuitiesUniComponent } from './rates/deferred-annuities-uni/deferred-annuities-uni.component';
import { IndexUniversalLifeComponent } from './rates/index-universal-life/index-universal-life.component';
import { RatesComponent } from './rates/rates.component';
import { SpiaAgePeriodBandsComponent } from './rates/spia-age-period-bands/spia-age-period-bands.component';
import { SpiaScRatesComponent } from './rates/spia-sc-rates/spia-sc-rates.component';
import { AddEditItemsComponent } from './ulic-administration/add-edit-items/add-edit-items.component';
import { AddEditSectionComponent } from './ulic-administration/add-edit-section/add-edit-section.component';
import { AddEditUserTypeComponent } from './ulic-administration/add-edit-user-type/add-edit-user-type.component';
import { AddEditUserComponent } from './ulic-administration/add-edit-user/add-edit-user.component';
import { SectionSecurityComponent } from './ulic-administration/section-security/section-security.component';
import { UlicAdministrationComponent } from './ulic-administration/ulic-administration.component';
import { UquoteRegressionToolComponent } from './uquote/uquote-regression-tool/uquote-regression-tool.component';
import { UquoteComponent } from './uquote/uquote.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'agents-only',
    component: AgentsOnlyComponent,
    children: [
      { path: 'content-management', component: ContentManagementComponent },
      { path: 'content-management-esol', component: ContentManagementEsolComponent },
      { path: 'user-maintenance-life', component: UserMaintenanceLifeComponent }
    ]
  },
  {
    path: 'life',
    component: LifeComponent,
    children: [
      { path: 'united-life-document-manager', component: UnitedLifeDocumentManagerComponent },
      { path: 'life-agent-inquiry', component: LifeAgentInquiryComponent },
      { path: 'life-caps-maintenance', component: LifeCapsMaintenanceComponent }
    ]
  },
  {
    path: 'miscellaneous',
    component: MiscellaneousComponent,
    children: [
      { path: 'down-indicator', component: DownIndicatorComponent },
      { path: 'news-message-update', component: NewMessageUpdateComponent },
      { path: 'picture-group-maintenance', component: PictureGroupMaintenanceComponent },
      { path: 'mobile-message-logs', component: MobileMessageLogsComponent },
      { path: 'mobile-app-usage-tracking-log', component: MobileAppUsageTrackingLogComponent },
      { path: 'whats-new-life-manager', component: WhatsNewLifeManagerComponent }
    ]
  },
  {
    path: 'uquote',
    component: UquoteComponent,
    children: [
      { path: 'uquote-regression-tool', component: UquoteRegressionToolComponent }
    ]
  },
  {
    path: 'ulic-administration',
    component: UlicAdministrationComponent,
    children: [
      { path: 'add-edit-user-type', component: AddEditUserTypeComponent },
      { path: 'add-edit-user', component: AddEditUserComponent },
      { path: 'add-edit-section', component: AddEditSectionComponent },
      { path: 'add-edit-section-items', component: AddEditItemsComponent },
      { path: 'section-security', component: SectionSecurityComponent }
    ]
  },
  {
    path: 'rates',
    component: RatesComponent,
    children: [
      { path: 'deferred-annuities-uni', component: DeferredAnnuitiesUniComponent },
      { path: 'spia-sc-rates', component: SpiaScRatesComponent },
      { path: 'spia-sc-age-period-bands', component: SpiaAgePeriodBandsComponent },
      { path: 'index-universal-life', component: IndexUniversalLifeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
