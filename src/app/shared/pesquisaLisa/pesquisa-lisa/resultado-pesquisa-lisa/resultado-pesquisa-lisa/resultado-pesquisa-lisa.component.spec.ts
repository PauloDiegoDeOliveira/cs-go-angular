import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPesquisaLisaComponent } from './resultado-pesquisa-lisa.component';

describe('ResultadoPesquisaLisaComponent', () => {
  let component: ResultadoPesquisaLisaComponent;
  let fixture: ComponentFixture<ResultadoPesquisaLisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoPesquisaLisaComponent]
    });
    fixture = TestBed.createComponent(ResultadoPesquisaLisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
