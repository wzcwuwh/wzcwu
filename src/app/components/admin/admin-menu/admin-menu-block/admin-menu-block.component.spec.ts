import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuBlockComponent } from './admin-menu-block.component';

describe('AdminMenuBlockComponent', () => {
  let component: AdminMenuBlockComponent;
  let fixture: ComponentFixture<AdminMenuBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
