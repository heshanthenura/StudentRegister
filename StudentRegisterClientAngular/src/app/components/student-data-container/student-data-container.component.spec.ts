import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataContainerComponent } from './student-data-container.component';

describe('StudentDataContainerComponent', () => {
  let component: StudentDataContainerComponent;
  let fixture: ComponentFixture<StudentDataContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDataContainerComponent]
    });
    fixture = TestBed.createComponent(StudentDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
