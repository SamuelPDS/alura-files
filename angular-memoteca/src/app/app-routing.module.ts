import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralPensamentoComponent } from './componentes/pensamentos/mural-pensamento/mural-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { CardPensamentoComponent } from './componentes/card-pensamento/card-pensamento.component';

const routes: Routes = [
  {path: '', component: MuralPensamentoComponent, pathMatch:'full'},
  {path: 'criarpensamento', component: CriarPensamentoComponent},
  {path: 'cardComponent', component: CardPensamentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
