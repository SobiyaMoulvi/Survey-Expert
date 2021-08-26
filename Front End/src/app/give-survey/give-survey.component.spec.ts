import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveSurveyComponent } from './give-survey.component';

describe('GiveSurveyComponent', () => {
  let component: GiveSurveyComponent;
  let fixture: ComponentFixture<GiveSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
