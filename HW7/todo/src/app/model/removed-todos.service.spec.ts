import { TestBed } from '@angular/core/testing';

import { RemovedTodosService } from './removed-todos.service';

describe('RemovedTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemovedTodosService = TestBed.get(RemovedTodosService);
    expect(service).toBeTruthy();
  });
});
