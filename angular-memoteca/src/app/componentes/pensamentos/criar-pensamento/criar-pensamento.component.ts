import { Pensamento } from './../pensamento';
import { Component, Inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PensamentosService } from 'src/app/services/pensamentos.service';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  card: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private route: Router, private pensamentoService: PensamentosService) { }

  ngOnInit(): void {
  }

  createThinking(){
    this.pensamentoService.createPensamentos(this.card).subscribe(res => {
      alert("Pensamento adicionado")
      this.route.navigate([''])
    })
  }

  onCancel() {
    this.route.navigate([''])
  }

}
