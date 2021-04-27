/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryServicoService } from './category-servico.service';

describe('Service: CategoryServico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryServicoService]
    });
  });

  it('should ...', inject([CategoryServicoService], (service: CategoryServicoService) => {
    expect(service).toBeTruthy();
  }));
});
