import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts2Component } from './charts2.component';

describe('Charts2Component', () => {
  let component: Charts2Component;
  let fixture: ComponentFixture<Charts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Charts2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Charts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
