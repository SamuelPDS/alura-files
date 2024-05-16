import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentosService } from 'src/app/services/pensamentos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
pensamento: Pensamento = {
  id: 0,
  conteudo: '',
  autoria: '',
  modelo: ''
}
  constructor(private pensamentoService: PensamentosService, private router: Router,
    private route: ActivatedRoute) { }

  excluirPensamento() {
    if(this.pensamento.id != null) {
      this.pensamentoService.deleteService(this.pensamento.id).subscribe(res => {
        this.router.navigate(['/'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/'])

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.getPensamentoById(id!).subscribe(res => {
      this.pensamento = res;
    })
  }

}
