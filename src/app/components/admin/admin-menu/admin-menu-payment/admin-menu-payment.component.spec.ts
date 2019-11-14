import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuPaymentComponent } from './admin-menu-payment.component';

describe('AdminMenuPaymentComponent', () => {
  let component: AdminMenuPaymentComponent;
  let fixture: ComponentFixture<AdminMenuPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
