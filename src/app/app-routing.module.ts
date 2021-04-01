import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { ValidateComponent } from './validate/validate.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'login',component:LoginComponent},
{path:'validate',component:ValidateComponent},
{path:'validateform',component:ValidateFormComponent},
{path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
