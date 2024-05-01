import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

verifiCardLength() {
  if(this.pensamento.conteudo.length > 256) {
    return 'pensamentop-g'
  } else {
    return 'pensamentop-p'
  }
}

}
