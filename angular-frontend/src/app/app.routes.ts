import { Route } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';


export const routes: Route[] = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent }


 
];