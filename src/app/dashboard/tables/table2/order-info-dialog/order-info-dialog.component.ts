import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-order-info-dialog',
  templateUrl: './order-info-dialog.component.html',
  styleUrl: './order-info-dialog.component.css'
})
export class OrderInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OrderInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public order: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
