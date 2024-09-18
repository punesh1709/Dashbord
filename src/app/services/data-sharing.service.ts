
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
// import {Order}
// import { Order } from './dashboard/tables/table2/table2.component';
import { Order } from '../dashboard/tables/table2/table2.component';
@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  // Create a Subject to act as an observable for data changes
  private dataUpdatedSource = new Subject<void>();

  // Expose the observable for other components to subscribe to
  dataUpdated$ = this.dataUpdatedSource.asObservable();

  // Method to notify subscribers about data changes
  notifyDataChange() {
    this.dataUpdatedSource.next();
  }
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  updateOrders(orders: Order[]): void {
    this.ordersSubject.next(orders);
  }
} 
