import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MaterialModule} from "../../shared/modules/material/material.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
    AsyncPipe,
    RouterOutlet,
  ]
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
