import { Routes } from '@angular/router';
import {SignInComponent} from "./authentication/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/pages/sign-up/sign-up.component";
import {ResetPasswordComponent} from "./authentication/pages/reset-password/reset-password.component";
import {EmailConfirmationComponent} from "./authentication/pages/email-confirmation/email-confirmation.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

export const routes: Routes = [
    {path: '', redirectTo:'sign-in', pathMatch:'full'},
    {path:'sign-in', component: SignInComponent},
    {path:'sign-up', component: SignUpComponent},
    {path:'forget-password',component: ResetPasswordComponent},
    {path:'email-confirmation', component: EmailConfirmationComponent},


    {path:'**', component: PageNotFoundComponent}
];
