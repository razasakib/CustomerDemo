import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerComponent } from './component/customer/customer.component';


const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'},
  { path: 'customer', component:CustomerComponent},
  { path: 'customerList', component:CustomerListComponent },
 // { path: 'leads', component:LeadsComponent },
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
