import { NgModule } from '@angular/core'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
  ],
})
export class SharedModule {}
