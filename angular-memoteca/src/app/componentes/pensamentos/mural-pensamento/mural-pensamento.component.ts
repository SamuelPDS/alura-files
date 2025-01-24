import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-mural-pensamento',
  templateUrl: './mural-pensamento.component.html',
  styleUrls: ['./mural-pensamento.component.css']
})
export class MuralPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaPensamento: Pensamento[] = [];

}
