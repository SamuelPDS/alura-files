import { PensamentosService } from 'src/app/services/pensamentos.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo:' ',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentosService, private router: Router, private route: ActivatedRoute) { }


  editarPensamento() {
    this.service.putPensamentos(this.pensamento).subscribe();
    alert("Pensamento editado")
    this.router.navigate(['/'])
  }

  cancelar() {
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id != null) {
      this.service.getPensamentoById(id).subscribe(res => {
          this.pensamento = res
      })
    }
  }
}
