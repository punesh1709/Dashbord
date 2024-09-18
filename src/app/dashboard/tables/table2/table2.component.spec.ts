import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table2Component } from './table2.component';
import { OrderInfoDialogComponent } from './order-info-dialog/order-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('Table2Component', () => {
  let component: Table2Component;
  let fixture: ComponentFixture<Table2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Table2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function openOrderDetailsDialog(order: any, any: any) {
  throw new Error('Function not implemented.');
}

