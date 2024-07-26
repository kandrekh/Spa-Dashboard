import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./layout/navigation/navigation.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavigationComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pages';
}
