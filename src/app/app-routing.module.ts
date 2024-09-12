// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { DialogsComponent } from './dashboard/dialogs/dialogs.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/cards', component: CardsComponent },
  { path: 'dashboard/tables', component: TablesComponent },
  { path: 'dashboard/charts', component: ChartsComponent },
  { path: 'dashboard/forms', component: FormsComponent },
  { path: 'dashboard/dialogs', component: DialogsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'section1', component: Section1Component },
  // { path: 'section2', component: Section2Component },
  // { path: 'section3', component: Section3Component },
  // { path: 'section4', component: Section4Component },
  // { path: '', redirectTo: '/section1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
