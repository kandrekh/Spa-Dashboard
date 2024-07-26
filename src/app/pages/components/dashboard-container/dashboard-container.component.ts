import {Component, inject} from '@angular/core';
import {AuthService} from "../../../authentication/services/auth.service";
import {AdminDashboardComponent} from "../../dashboard/admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "../../dashboard/user-dashboard/user-dashboard.component";

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {
  authService = inject(AuthService);
}
