import { Routes } from "@angular/router";
import { CardsComponent } from "./dashboard/cards/cards.component";
import { ChartsComponent } from "./dashboard/charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DialogsComponent } from "./dashboard/dialogs/dialogs.component";
import { TablesComponent } from "./dashboard/tables/tables.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductsComponent } from "./products/products.component";
import { SettingComponent } from "./dashboard/setting/setting.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/cards', component: CardsComponent },
  { path: 'dashboard/tables', component: TablesComponent },
  { path: 'dashboard/charts', component: ChartsComponent },
  { path: 'dashboard/dialogs', component: DialogsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'setting', component: SettingComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
