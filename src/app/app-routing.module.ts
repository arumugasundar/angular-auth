import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';


const routes: Routes = [
  { path:'', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'user-list', component: UserListComponent, canActivate: [AuthGuardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
