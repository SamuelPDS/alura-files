import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentosService } from 'src/app/services/pensamentos.service';

@Component({
  selector: 'app-mural-pensamento',
  templateUrl: './mural-pensamento.component.html',
  styleUrls: ['./mural-pensamento.component.css']
})
export class MuralPensamentoComponent implements OnInit {
  listaPensamento: Pensamento[] = [];

  constructor(private pensamentoService: PensamentosService) { }

  ngOnInit(): void {
    this.pensamentoService.getPensamentos().subscribe((res) => {
      this.listaPensamento = res
    })
  }


}
