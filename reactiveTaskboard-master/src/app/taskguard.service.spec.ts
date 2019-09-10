import { TestBed } from '@angular/core/testing';

import { TaskguardService } from './taskguard.service';

describe('TaskguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskguardService = TestBed.get(TaskguardService);
    expect(service).toBeTruthy();
  });
});
