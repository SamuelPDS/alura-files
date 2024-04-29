import { Component, Inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  card = {
    id : 1,
    pensamento: 'Aprendendo BackEnd',
    autoria: 'Samuel Charles',
    modelo: 'modelo3'
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  createThinking(){
    alert("Pensamento adicionado")
  }

  onCancel() {
    this.route.navigate([''])
  }

}
