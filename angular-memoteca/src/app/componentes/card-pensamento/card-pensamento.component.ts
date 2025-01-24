import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pensamento: Pensamento = {
    id: 0,
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
