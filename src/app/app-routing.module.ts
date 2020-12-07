import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmployeeService } from './employee.service';

const routes: Routes = [
  // { path: 'first-component', component: FirstComponent },
  // { path: 'second-component', component: SecondComponent },
  // // { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: FirstComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
