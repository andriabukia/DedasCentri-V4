import { Routes } from '@angular/router';
import { HomePage } from './Components/home-page/home-page';
import { ContactPage } from './Components/contact-page/contact-page';
import { MembersPage } from './Components/members-page/members-page';
import { TimeTable } from './Components/time-table/time-table';

export const routes: Routes = [
{ path: '', component: HomePage }, 
  { path: 'ContactUs', component: ContactPage },
  {path: 'Members', component:MembersPage},
  {path: 'TimeTable', component:TimeTable}
];
