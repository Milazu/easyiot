import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'table', component: TableComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user', component: UserComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/' } 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
    LoginComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DashboardComponent,TableComponent
]