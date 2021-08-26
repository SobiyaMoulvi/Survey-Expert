import { TestBed } from '@angular/core/testing';

import { AddQuestionServiceService } from './add-question-service.service';

describe('AddQuestionServiceService', () => {
  let service: AddQuestionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddQuestionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
