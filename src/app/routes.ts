// src/app/routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { DialogsComponent } from './dashboard/dialogs/dialogs.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingComponent } from './dashboard/setting/setting.component';
// import { SettingComponent } from './dashboard/setting/setting.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/cards', component: CardsComponent },
  { path: 'dashboard/tables', component: TablesComponent },
  { path: 'dashboard/charts', component: ChartsComponent },
  { path: 'dashboard/dialogs', component: DialogsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'setting', component: SettingComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
