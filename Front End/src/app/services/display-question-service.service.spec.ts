import { TestBed } from '@angular/core/testing';

import { DisplayQuestionServiceService } from './display-question-service.service';

describe('DisplayQuestionServiceService', () => {
  let service: DisplayQuestionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayQuestionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
