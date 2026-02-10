import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkeletonComponent } from './user-skeleton.component';

describe('UserSkeletonComponent', () => {
  let component: UserSkeletonComponent;
  let fixture: ComponentFixture<UserSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
