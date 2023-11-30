import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8085/api/clientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  getClientes(): Observable<Cliente[]> {
    console.log('Clientes', this.http.get);
    return this.http
      .get<Cliente[]>(this.urlEndPoint)
      .pipe(tap((data) => console.log('Clientes:', data)));
  }
  create(cliente: Cliente): Observable<Cliente> {
    return this.http
      .post<Cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders })
      .pipe(
        catchError((e) => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          Swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }
}
