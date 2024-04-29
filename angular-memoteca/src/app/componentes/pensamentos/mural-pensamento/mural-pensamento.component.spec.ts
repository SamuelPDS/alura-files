import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralPensamentoComponent } from './mural-pensamento.component';

describe('MuralPensamentoComponent', () => {
  let component: MuralPensamentoComponent;
  let fixture: ComponentFixture<MuralPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
