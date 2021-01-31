import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuardGuard, HomePageResolverService } from '@i-eat/core'
import { HeaderComponent, SidebarComponent } from '@i-eat/i-eat-modules'

const rootPath = 'app'
const homePath = 'home'

const routes: Routes = [
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: `404 page not found`,
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: rootPath + '/' + homePath,
  },
  {
    path: rootPath,
    pathMatch: 'full',
    redirectTo: rootPath + '/' + homePath,
  },
  {
    path: rootPath,
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
      {
        path: homePath,
        loadChildren: () => import('./routing/app-home.module').then(m => m.AppHomeModule),
        // component: HomeComponent,
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
