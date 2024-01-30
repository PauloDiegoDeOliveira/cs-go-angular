import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaLisaComponent } from './pesquisa-lisa.component';

describe('PesquisaLisaComponent', () => {
  let component: PesquisaLisaComponent;
  let fixture: ComponentFixture<PesquisaLisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaLisaComponent]
    });
    fixture = TestBed.createComponent(PesquisaLisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
