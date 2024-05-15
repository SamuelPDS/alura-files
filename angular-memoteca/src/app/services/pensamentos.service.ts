import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  constructor(private httpClient: HttpClient) { }

  

}
