import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Life Administration';
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/home'],
      routerLinkActiveOptions: { exact: false }
    },
    {
      label: 'Agents Only',
      icon: 'pi pi-users',
      routerLink: ['/agents-only'],
      routerLinkActiveOptions: { exact: false },
      items: [
        {
          label: 'Content Management',
          routerLink: ['/agents-only', 'content-management'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Content Management Esol',
          routerLink: ['/agents-only', 'content-management-esol'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'User Maintenance - Life',
          routerLink: ['/agents-only', 'user-maintenance-life'],
          routerLinkActiveOptions: { exact: false }
        }
      ]
    },
    {
      label: 'Life',
      icon: 'pi pi-heart',
      routerLink: ['/life'],
      routerLinkActiveOptions: { exact: false },
      items: [
        {
          label: 'United Life Document Manager',
          routerLink: ['/life', 'united-life-document-manager'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Life Agent Inquiry',
          routerLink: ['/life', 'life-agent-inquiry'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Life Caps Maintenance',
          routerLink: ['/life', 'life-caps-maintenance'],
          routerLinkActiveOptions: { exact: false }
        }
      ]
    },
    {
      label: 'Miscellaneous',
      icon: 'pi pi-briefcase',
      routerLink: ['/miscellaneous'],
      routerLinkActiveOptions: { exact: false },
      items: [
        {
          label: 'Down Indicator',
          routerLink: ['/miscellaneous', 'down-indicator'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'News Message Update',
          routerLink: ['/miscellaneous', 'news-message-update'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Picture Group Maintenance',
          routerLink: ['/miscellaneous', 'picture-group-maintenance']
        },
        {
          label: 'Mobile Message Logs',
          routerLink: ['/miscellaneous', 'mobile-message-logs'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Mobile App Usage Tracking Log',
          routerLink: ['/miscellaneous', 'mobile-app-usage-tracking-log'],
          routerLinkActiveOptions: { exact: false }
       },
        {
          label: 'What\'s New Life Manager',
          routerLink: ['/miscellaneous', 'whats-new-life-manager'],
          routerLinkActiveOptions: { exact: false }
        }
      ]
    },
    {
      label: 'UQuote',
      icon: 'pi pi-check-square',
      routerLink: ['/uquote'],
      routerLinkActiveOptions: { exact: false },
      items: [
        {
          label: 'UQuote Regression Tool',
          routerLink: ['/uquote', 'uquote-regression-tool'],
          routerLinkActiveOptions: { exact: false }
        }
      ]
    },
    {
      label: 'ULIC Administration',
      icon: 'pi pi-pencil',
      routerLink: ['/ulic-administration'],
      routerLinkActiveOptions: { exact: false },
      items: [
        {
          label: 'Add/Edit User Type',
          routerLink: ['/ulic-administration', 'add-edit-user-type'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Add/Edit User',
          routerLink: ['/ulic-administration', 'add-edit-user'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Add/Edit Section',
          routerLink: ['/ulic-administration', 'add-edit-section'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Add/Edit Section Items',
          routerLink: ['/ulic-administration', 'add-edit-section-items'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Section Security',
          routerLink: ['/ulic-administration', 'section-security'],
          routerLinkActiveOptions: { exact: false }
        }
      ]
    },
    {
      label: 'Rates',
      icon: 'pi pi-chart-line',
      routerLink: ['/rates'],
      routerLinkActiveOptions: { exact: false },
      items: [
        {
          label: 'Deferred Annuities/Uni',
          routerLink: ['/rates', 'deferred-annuities-uni'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'SPIA/SC - Rates',
          routerLink: ['/rates', 'spia-sc-rates'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'SPIA/SC - Age/Period Bands',
          routerLink: ['/rates', 'spia-sc-age-period-bands'],
          routerLinkActiveOptions: { exact: false }
        },
        {
          label: 'Index Universal Life',
          routerLink: ['/rates', 'index-universal-life'],
          routerLinkActiveOptions: { exact: false }
        }
      ]
    }
  ];
}
