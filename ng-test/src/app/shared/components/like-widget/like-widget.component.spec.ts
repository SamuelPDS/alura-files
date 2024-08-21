import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetModule } from './like-widget.module';


describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null; //wrapper que embrulha o component para testes

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService],
      // imports: [FontAwesomeModule]
      imports: [LikeWidgetModule] //usa os imports do componente
    }).compileComponents(); //aguarda a compilação do component ser renderizado

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('shoud create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should generate a Id when the same was not defined at method param', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges()
    expect(component.id).toBeTruthy();
  })

  it('should not generate a Id when the same is defined at method param', () => {
    const component = fixture.componentInstance;
    component.id = 1;
    fixture.detectChanges();
    // fixture.detectChanges();
    expect(component.id).toBe(1);
  })
});

