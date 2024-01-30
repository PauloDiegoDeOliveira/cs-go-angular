import { TestBed } from '@angular/core/testing';
import { PesquisarLisaService } from './pesquisar-lisa.service';

describe('PesquisarLisaService', () => {
  let service: PesquisarLisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisarLisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
