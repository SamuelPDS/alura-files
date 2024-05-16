import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from '../componentes/pensamentos/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  constructor(private httpClient: HttpClient) { }

  private readonly API_URL = "http://localhost:3000/pensamento"

  getPensamentos(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.API_URL);
  }

  createPensamentos(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.API_URL, pensamento);
  }

  deleteService(id: number): Observable<Pensamento> {
    return this.httpClient.delete<Pensamento>(`${this.API_URL}/${id}`);
  }

  getPensamentoById(id: string) {
    return this.httpClient.get<Pensamento>(`${this.API_URL}/${id}`)
  }

}
