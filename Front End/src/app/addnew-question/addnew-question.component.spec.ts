import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewQuestionComponent } from './addnew-question.component';

describe('AddnewQuestionComponent', () => {
  let component: AddnewQuestionComponent;
  let fixture: ComponentFixture<AddnewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
