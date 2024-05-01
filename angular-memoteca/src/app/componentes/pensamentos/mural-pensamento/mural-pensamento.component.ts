import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural-pensamento',
  templateUrl: './mural-pensamento.component.html',
  styleUrls: ['./mural-pensamento.component.css']
})
export class MuralPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaPensamento = [
    {
      conteudo: 'dui et neque. Nullam quis nisi ut enim faucibus pellentesque a ut lacus',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Recebo as informações do componente pai com o @Input',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet justo ac ex sagittis interdum. Donec eu felis ac justo pharetra pulvinar non vel velit. Morbi ut lorem ac turpis posuere sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer metus magna, molestie eu magna eu, faucibus sagittis metus. Aliquam sagittis eros elit, non blandit justo aliquam eu. Cras eget augue sed purus faucibus pretium eu ac erat. Vivamus mollis, lorem eu porta posuere, justo purus pellentesque est, eget mollis velit tortor non elit. Nam suscipit est at metus congue bibendum. Nam at faucibus tellus. Quisque pulvinar scelerisque nisl, sit amet semper mauris pretium vitae. Curabitur tincidunt, libero vel ultrices aliquet, diam lorem pretium nunc, quis bibendum tellus dui et neque. Nullam quis nisi ut enim faucibus pellentesque a ut lacus',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
  ];

}
