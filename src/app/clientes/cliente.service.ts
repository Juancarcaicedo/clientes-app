import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import { tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint: string='http://localhost:8085/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}
  getClientes(): Observable<Cliente[]>{
    console.log("Clientes", this.http.get)
    return this.http.get<Cliente[]>(this.urlEndPoint)
    .pipe(
      tap(data => console.log('Clientes:', data))
    );
  }
  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente,{headers: this.httpHeaders})
    }
    
}
