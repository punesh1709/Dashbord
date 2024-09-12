// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideClientHydration(),
//     provideAnimationsAsync()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { MatSidenav } from '@angular/material/sidenav'; 
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './dashboard/cards/cards.component';
// import { TablesComponent } from './dashboard/tables/tables.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { DialogsComponent } from './dashboard/dialogs/dialogs.component';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { MatTableModule } from '@angular/material/table';
import { FormRecord, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { Table1Component } from './dashboard/tables/table1/table1.component';
import { Table2Component } from './dashboard/tables/table2/table2.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    CardsComponent,
    TablesComponent,
    ChartsComponent,
    FormsComponent,
    DialogsComponent,
    Table1Component,
    Table2Component,

 
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts,
    }),
    BrowserModule,
    AppRoutingModule,
    MatSidenav,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatCommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatLabel,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    // RouterModule.forRoot([]) 
    RouterModule.forRoot([])
  ],
  // providers: [provideHttpClient(withFetch()) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
