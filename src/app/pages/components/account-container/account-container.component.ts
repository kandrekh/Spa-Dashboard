import {Component, inject} from '@angular/core';
import {AuthService} from "../../../authentication/services/auth.service";
import {AdminAccountComponent} from "../../account/admin-account/admin-account.component";
import {UserAccountComponent} from "../../account/user-account/user-account.component";

@Component({
  selector: 'app-account-container',
  standalone: true,
  imports: [
    AdminAccountComponent,
    UserAccountComponent
  ],
  templateUrl: './account-container.component.html',
  styleUrl: './account-container.component.scss'
})
export class AccountContainerComponent {
  authService=inject(AuthService)
}
