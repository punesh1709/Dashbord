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
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './dashboard/cards/cards.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { DialogsComponent } from './dashboard/dialogs/dialogs.component';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { Table1Component } from './dashboard/tables/table1/table1.component';
import { Table2Component } from './dashboard/tables/table2/table2.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { Charts2Component } from './dashboard/charts/charts2/charts2.component';
import { Cards2Component } from './dashboard/cards/cards2/cards2.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserInfoDialogComponent } from './dashboard/user-info-dialog/user-info-dialog.component';
import { OrderInfoDialogComponent } from './dashboard/tables/table2/order-info-dialog/order-info-dialog.component';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { MatSortModule } from '@angular/material/sort';
import { MainComComponent } from './main-com/main-com.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { SettingsComponent } from './settings/settings.component';
// import { SettingComponent } from './dashboard/setting/setting.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    CardsComponent,
    TablesComponent,
    ChartsComponent,
    Charts2Component,
    DialogsComponent,
    Table1Component,
    SettingComponent,
    Table2Component,
    
    Cards2Component,
    
    UserInfoDialogComponent,
    OrderInfoDialogComponent,
    MainComComponent,
    SettingsComponent,
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts,
    }),
    BrowserModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSidenav,
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
    MatTabsModule,
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
    FontAwesomeModule,
    MatSortModule,
    MatTabsModule,
    // RouterModule.forRoot([])
    RouterModule.forRoot([]),
  ],
  // providers: [provideHttpClient(withFetch()) ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
