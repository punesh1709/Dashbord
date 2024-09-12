import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

export interface UserData {
  name: string;
  email: string;
  role: string;
  salary: number;
}

const USER_DATA: UserData[] = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', salary: 50000 },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User', salary: 45000 },
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Manager', salary: 55000 },
  // Add more sample data here...
];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit, AfterViewInit {
  showTable1 = true; // Default to show Table1

  toggleTable() {
    this.showTable1 = !this.showTable1;
  }
  displayedColumns: string[] = ['name', 'email', 'role', 'salary', 'actions'];
  dataSource = new MatTableDataSource<UserData>(USER_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  userForm: FormGroup;
  isEditMode = false;
  currentIndex: number | null = null;

  @ViewChild('userDialog') userDialog: any;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(1)]],
      isActive: [false],
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    this.userForm.reset(); // Reset the form before opening
    this.dialog.open(this.userDialog, { width: '400px' });
  }

  editUser(user: UserData, index: number): void {
    this.isEditMode = true;
    this.currentIndex = index;
    this.userForm.patchValue(user); // Populate form with user data
    this.dialog.open(this.userDialog, { width: '400px' });
  }

  deleteUser(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      if (this.isEditMode && this.currentIndex !== null) {
        // Update existing user
        this.dataSource.data[this.currentIndex] = userData;
      } else {
        // Add new user
        this.dataSource.data.push(userData);
      }

      this.dataSource._updateChangeSubscription();
      this.dialog.closeAll();
    }
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
