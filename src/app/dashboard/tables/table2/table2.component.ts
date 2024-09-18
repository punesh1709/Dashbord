import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { DataSharingService } from '../../../data-sharing.service'; // Adjust the import path
import { DataSharingService } from '../../../services/data-sharing.service';
import Swal from 'sweetalert2';
import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { OrderInfoDialogComponent } from './order-info-dialog/order-info-dialog.component';
export interface Order {
  id: number;
  orderName: string;
  customer: string;
  orderDate: Date;
  amount: number;
  revenue: number;
  status: string; // New field for mat-select
  isUrgent: boolean; // New field for mat-checkbox
  // priority: string; // New field for mat-radio-group
}

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component implements OnInit, AfterViewInit {
  faEdit = faEdit; // Declare FontAwesome icons
  faTrash = faTrash;
   faInfoCircle = faInfoCircle;
  displayedColumns: string[] = [
    'orderName',
    'customer',
    'orderDate',
    'amount',
    'revenue',
    'status',
    'isUrgent',
    
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

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dataSharingService: DataSharingService // Inject service
  ) {
    this.dataSource = new MatTableDataSource(this.orders);
    this.orderForm = this.fb.group({
      orderName: ['', Validators.required],
      customer: ['', Validators.required],
      orderDate: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      revenue: [0, [Validators.required, Validators.min(1)]],
      status: ['Pending', Validators.required], // New field
      isUrgent: [false], // New field
     
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
    // Show a SweetAlert2 confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this order? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with deleting the order if the user confirms
        this.orders = this.orders.filter((order) => order.id !== id);
        this.saveOrdersToLocalStorage();
        this.refreshTable();

        // Show a success message
        Swal.fire('Deleted!', 'The order has been deleted.', 'success');
      }
    });
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
    this.dataSharingService.updateOrders(this.orders); // Notify other components
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
    const totalCustomers = new Set(this.orders.map((order) => order.customer)).size;
    const totalOrders = this.orders.length;
    const totalRevenue = this.orders.reduce((sum, order) => sum + order.revenue, 0);
    const averageRevenue = totalOrders ? totalRevenue / totalOrders : 0;

    // Update the view with the calculated values
    this.totalCustomers = totalCustomers;
    this.totalOrders = totalOrders;
    this.totalRevenue = totalRevenue;
    this.averageRevenue = averageRevenue;
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
  //constructor(private dialog: MatDialog) {}

  openOrderDetailsDialog(order: Order): void {
    this.dialog.open(OrderInfoDialogComponent, {
      width: '400px',
      data: order // Pass the selected order to the modal
    });
  }
  totalCustomers: number = 0;
  totalOrders: number = 0;
  totalRevenue: number = 0;
  averageRevenue: number = 0;
}
