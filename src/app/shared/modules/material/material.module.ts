import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const Material = [CommonModule, MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,]

@NgModule({
  declarations: [],
  imports: Material,
  exports: Material
})
export class MaterialModule { }
