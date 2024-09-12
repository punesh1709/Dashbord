import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

export interface UserData {
  name: string;
  email: string;
  role: string;
  salary: number;
  incrementedSalary: number; // New field for the 20% incremented salary
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css'],
})
export class Table1Component implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'role',
    'salary',
    'incrementedSalary',
    'actions',
  ];
  dataSource = new MatTableDataSource<UserData>(this.loadData());

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  userForm: FormGroup;
  isEditMode = false;
  currentIndex: number | null = null;

  @ViewChild('userDialog') userDialog: any;

  // New properties
  totalUsers = 0;
  totalSalary = 0;
  averageSalary = 0;
  totalIncrementedSalary = 0;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.updateStatistics();
  }

  loadData(): UserData[] {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : [];
  }

  saveData(data: UserData[]): void {
    localStorage.setItem('userData', JSON.stringify(data));
    this.updateStatistics(); // Update statistics after saving data
  }

  updateStatistics(): void {
    const data = this.dataSource.data;
    this.totalUsers = data.length;
    this.totalSalary = data.reduce((sum, user) => sum + user.salary, 0);
    this.averageSalary = this.totalUsers ? this.totalSalary / this.totalUsers : 0;
    this.totalIncrementedSalary = data.reduce((sum, user) => sum + user.incrementedSalary, 0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUserDialog(): void {
    this.isEditMode = false;
    this.currentIndex = null;
    this.userForm.reset();
    this.dialog.open(this.userDialog, { width: '400px' });
  }

  editUser(user: UserData, index: number): void {
    this.isEditMode = true;
    this.currentIndex = index;
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      role: user.role,
      salary: user.salary,
    });
    this.dialog.open(this.userDialog, { width: '400px' });
  }

  deleteUser(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = this.dataSource.data;
        data.splice(index, 1);
        this.saveData(data);
        this.dataSource._updateChangeSubscription();
        Swal.fire('Deleted!', 'The user has been deleted.', 'success');
      }
    });
  }
  

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      userData.incrementedSalary = userData.salary * 1.2; // Calculate the incremented salary

      const data = this.dataSource.data;

      if (this.isEditMode && this.currentIndex !== null) {
        data[this.currentIndex] = userData;
      } else {
        data.push(userData);
      }

      this.saveData(data);
      this.dataSource._updateChangeSubscription();
      this.dialog.closeAll();
    }
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
