import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralPensamentoComponent } from './componentes/pensamentos/mural-pensamento/mural-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { CardPensamentoComponent } from './componentes/card-pensamento/card-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {path: '', component: MuralPensamentoComponent, pathMatch:'full'},
  {path: 'criarpensamento', component: CriarPensamentoComponent},
  {path: 'cardComponent', component: CardPensamentoComponent},
  {path: 'pensamentos/excluirPensamentos/:id', component: ExcluirPensamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
