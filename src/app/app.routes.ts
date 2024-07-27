import { Routes } from '@angular/router';
import {SignInComponent} from "./authentication/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/pages/sign-up/sign-up.component";
import {ResetPasswordComponent} from "./authentication/pages/reset-password/reset-password.component";
import {EmailConfirmationComponent} from "./authentication/pages/email-confirmation/email-confirmation.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {NavigationComponent} from "./layout/navigation/navigation.component";
import {DashboardContainerComponent} from "./pages/components/dashboard-container/dashboard-container.component";
import {AccountContainerComponent} from "./pages/components/account-container/account-container.component";

export const routes: Routes = [
    {path: '', redirectTo:'sign-in', pathMatch:'full'},
    {path:'sign-in', component: SignInComponent},
    {path:'sign-up', component: SignUpComponent},
    {path:'forget-password',component: ResetPasswordComponent},
    {path:'email-confirmation', component: EmailConfirmationComponent},
    {path: 'dashboard', component:NavigationComponent,
    children:[
        {path: '', redirectTo:'user', pathMatch:'full'},
        {path:'user', component:DashboardContainerComponent},
        {path:'account', component:AccountContainerComponent},
    ]
    },
    {path:'**', component: PageNotFoundComponent}
];
