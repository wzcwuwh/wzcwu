import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuNavComponent } from './admin-menu-nav.component';

describe('AdminMenuNavComponent', () => {
  let component: AdminMenuNavComponent;
  let fixture: ComponentFixture<AdminMenuNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
