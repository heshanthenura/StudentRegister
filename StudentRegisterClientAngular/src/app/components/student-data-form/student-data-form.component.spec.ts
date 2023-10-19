import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataFormComponent } from './student-data-form.component';

describe('StudentDataFormComponent', () => {
  let component: StudentDataFormComponent;
  let fixture: ComponentFixture<StudentDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDataFormComponent]
    });
    fixture = TestBed.createComponent(StudentDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
