import { Route } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';


export const routes: Route[] = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'employees', component: EmployeePageComponent}

];