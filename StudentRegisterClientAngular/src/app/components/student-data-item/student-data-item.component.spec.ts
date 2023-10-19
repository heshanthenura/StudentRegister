import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataItemComponent } from './student-data-item.component';

describe('StudentDataItemComponent', () => {
  let component: StudentDataItemComponent;
  let fixture: ComponentFixture<StudentDataItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDataItemComponent]
    });
    fixture = TestBed.createComponent(StudentDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
