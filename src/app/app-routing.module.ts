import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerComponent } from './component/customer/customer.component';
import { LeadsListComponent } from './component/leads-list/leads-list.component';


const routes: Routes = [
  {path:'',redirectTo:'customerList',pathMatch:'full'},
  { path: 'customerList', component:CustomerListComponent },
  {path:'leads',component:LeadsListComponent},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
