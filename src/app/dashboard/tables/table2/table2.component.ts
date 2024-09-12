import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Order {
  id: number;
  orderName: string;
  customer: string;
  orderDate: Date;
  amount: number;
  revenue: number;
}

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'orderName',
    'customer',
    'orderDate',
    'amount',
    'revenue',
    'actions',
  ];
  dataSource: MatTableDataSource<Order>;

  orders: Order[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  orderForm: FormGroup;
  isEditMode = false;
  currentIndex: number | null = null;

  @ViewChild('orderDialog') orderDialog: any;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.orders);
    this.orderForm = this.fb.group({
      orderName: ['', Validators.required],
      customer: ['', Validators.required],
      orderDate: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      revenue: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.loadOrdersFromLocalStorage();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openOrderDialog(): void {
    this.isEditMode = false;
    this.currentIndex = null;
    this.orderForm.reset();
    this.dialog.open(this.orderDialog, { width: '400px' });
  }

  editOrder(order: Order): void {
    this.isEditMode = true;
    this.currentIndex = this.orders.findIndex((o) => o.id === order.id);
    this.orderForm.patchValue(order);
    this.dialog.open(this.orderDialog, { width: '400px' });
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter((order) => order.id !== id);
    this.saveOrdersToLocalStorage();
    this.refreshTable();
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      if (this.isEditMode && this.currentIndex !== null) {
        this.orders[this.currentIndex] = {
          id: this.orders[this.currentIndex].id,
          ...this.orderForm.value,
        };
      } else {
        const newOrder: Order = {
          id: this.orders.length + 1,
          ...this.orderForm.value,
        };
        this.orders.push(newOrder);
      }
      this.saveOrdersToLocalStorage();
      this.refreshTable();
      this.closeDialog();
    }
  }

  refreshTable(): void {
    this.dataSource.data = this.orders;
    this.updateStatistics();
  }

  saveOrdersToLocalStorage(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  loadOrdersFromLocalStorage(): void {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      this.orders = JSON.parse(storedOrders);
      this.refreshTable();
    }
  }

  updateStatistics(): void {
    const totalCustomers = new Set(this.orders.map((order) => order.customer))
      .size;
    const totalAmount = this.orders.reduce(
      (sum, order) => sum + order.amount,
      0
    );
    const totalRevenue = this.orders.reduce(
      (sum, order) => sum + order.revenue,
      0
    );
    const averageRevenue = this.orders.length
      ? totalRevenue / this.orders.length
      : 0;

    // Update the view with the calculated values
    this.totalCustomers = totalCustomers;
    this.totalAmount = totalAmount;
    this.totalRevenue = totalRevenue;
    this.averageRevenue = averageRevenue;
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  totalCustomers: number = 0;
  totalAmount: number = 0;
  totalRevenue: number = 0;
  averageRevenue: number = 0;
}
