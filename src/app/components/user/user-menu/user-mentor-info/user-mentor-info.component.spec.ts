import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMentorInfoComponent } from './user-mentor-info.component';

describe('UserMentorInfoComponent', () => {
  let component: UserMentorInfoComponent;
  let fixture: ComponentFixture<UserMentorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMentorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMentorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
