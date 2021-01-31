import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from '@i-eat/shared'

const LAYOUT_COMPONENTS = [ HeaderComponent, SidebarComponent ]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ...LAYOUT_COMPONENTS,
  ],
  exports: [
    ...LAYOUT_COMPONENTS,
  ],
})
export class LayoutModule {}
