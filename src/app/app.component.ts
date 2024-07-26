import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./layout/navigation/navigation.component";
import {NgStyle} from "@angular/common";
import {AuthService} from "./authentication/services/auth.service";
import {SignInComponent} from "./authentication/pages/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, NgStyle, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pages';

  authService = inject(AuthService);

}
