import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuardGuard, HomePageResolverService } from '@i-eat/shared'
import { HeaderComponent } from './layout/header/header.component'
import { SidebarComponent } from './layout/sidebar/sidebar.component'


const homePath = 'home'

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: homePath,
  },
  {
    path: homePath,
    pathMatch: 'full',
    canActivate: [ AuthGuardGuard ],
    resolve: {
      initialSettings: HomePageResolverService,
    },
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'app-header',
      },
      {
        path: '',
        component: SidebarComponent,
        outlet: 'app-sidebar',
      },
    ],
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
