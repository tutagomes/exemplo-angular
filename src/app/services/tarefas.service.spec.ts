import { TestBed } from '@angular/core/testing';

import { TarefasService } from './tarefas.service';

describe('TarefasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: TarefasService = TestBed.get(TarefasService);
    expect(service).toBeTruthy();
  });
});
