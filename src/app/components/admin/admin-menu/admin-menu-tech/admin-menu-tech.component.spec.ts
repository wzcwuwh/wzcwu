import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuTechComponent } from './admin-menu-tech.component';

describe('AdminMenuTechComponent', () => {
  let component: AdminMenuTechComponent;
  let fixture: ComponentFixture<AdminMenuTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
