import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetModule } from './like-widget.module';


describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null; //wrapper que embrulha o component para testes
  let component: LikeWidgetComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService],
      // imports: [FontAwesomeModule]
      imports: [LikeWidgetModule] //usa os imports do componente
    }).compileComponents(); //aguarda a compilação do component ser renderizado

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('shoud create component', () => {
    expect(component).toBeTruthy();
  });

  it('should auto generate a Id when the onInit int called when input id was not defined at method param', () => {
    fixture.detectChanges()
    expect(component.id).toBeTruthy();
  })

  it('should not generate a Id when the same is defined at method param', () => {
    component.id = 1;
    fixture.detectChanges(); //é recomendado inserir em todos os testes
    expect(component.id).toBe(1);
  })

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger emission when called`, () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  })
});

