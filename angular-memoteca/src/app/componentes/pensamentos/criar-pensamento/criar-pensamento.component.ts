import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  card = {
    id : 1,
    pensamento: 'Aprendendo BackEnd',
    autoria: 'Samuel Charles'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
