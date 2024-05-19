import { Pensamento } from './../pensamento';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PensamentosService } from 'src/app/services/pensamentos.service';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {
formGroup!: FormGroup;

  // card: Pensamento = {
  //   conteudo: '',
  //   autoria: '',
  //   modelo: ''
  // }

  constructor(private route: Router, private pensamentoService: PensamentosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.createForm(pensamento: Pensamento)
  }

  createForm(pensamento: Pensamento) {
    this.formGroup = this.formBuilder.group({
      conteudo: [pensamento.conteudo, [Validators.required]],
      autoria: [pensamento.autoria, Validators.required],
      modelo: [pensamento.modelo, Validators.required]
    })
  }

  createThinking(){
    this.pensamentoService.createPensamentos(this.formGroup.value).subscribe(res => {
      alert("Pensamento adicionado")
      this.route.navigate([''])
    })
  }

  onCancel() {
    this.route.navigate([''])
  }

}
