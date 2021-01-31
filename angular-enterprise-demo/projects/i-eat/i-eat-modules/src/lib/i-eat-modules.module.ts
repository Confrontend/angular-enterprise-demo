import { NgModule } from '@angular/core'
import { IEatModulesComponent } from './i-eat-modules.component'
import { CustomersOverviewComponent } from './customers/customers-overview/customers-overview.component'
import { EmployeesOverviewComponent } from './employees/employees-overview/employees-overview.component'
import { OrdersOverviewComponent } from './orders/orders-overview/orders-overview.component'
import { LayoutModule } from './layout/layout.module'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ IEatModulesComponent, CustomersOverviewComponent, EmployeesOverviewComponent, OrdersOverviewComponent ],
  imports: [ CommonModule ],
  exports: [ IEatModulesComponent, LayoutModule ],
})
export class IEatModulesModule {}
