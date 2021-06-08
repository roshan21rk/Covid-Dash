import { DistrictDataComponent } from './Components/covid-dash-board/district-data/district-data.component';
import { CovidDashBoardComponent } from './Components/Covid-19/covid-dash-board/covid-dash-board.component';
import { RegisterComponent } from './Components/LoginDetails/register/register.component';
import { LoginPageComponent } from './Components/LoginDetails/login-page/login-page.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    // component: LoginPageComponent
    component : CovidDashBoardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'covid',
    component: CovidDashBoardComponent
  },
  // DistrictDataComponent
  {
    path: 'district',
    component: DistrictDataComponent
  },

 
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }