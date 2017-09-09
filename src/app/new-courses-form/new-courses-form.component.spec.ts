import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursesFormComponent } from './new-courses-form.component';

describe('NewCoursesFormComponent', () => {
  let component: NewCoursesFormComponent;
  let fixture: ComponentFixture<NewCoursesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoursesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoursesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
