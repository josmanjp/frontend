import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@components/login/login.component';
import { PortfolioComponent } from './@components/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';
const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent },
  {path:'',redirectTo: 'portfolio',pathMatch:'full'}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 