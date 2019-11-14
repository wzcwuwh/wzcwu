import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuListComponent } from './user-menu-list.component';

describe('UserMenuListComponent', () => {
  let component: UserMenuListComponent;
  let fixture: ComponentFixture<UserMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
