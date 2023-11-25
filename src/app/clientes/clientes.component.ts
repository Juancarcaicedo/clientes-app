import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
 // imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit  {
  clientes: Cliente[] = [];
  constructor(private objClienteService: ClienteService) { }
  ngOnInit(): void {
   this.objClienteService.getClientes().subscribe(
     clientes=> this.clientes= clientes
   );
    }
    
  
}
  // clientes: Cliente[]=[
  //   {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juan@unicauca.edu.co', createAt: '2021-05-14'},
  //   {id: 2, nombre: 'Andres', apellido: 'Sanchez', email: 'andres@unicauca.edu.co', createAt: '2022-06-14'},
  //   {id: 1, nombre: 'Pedro', apellido: 'Cortez', email: 'pedro@unicauca.edu.co', createAt: '2018-02-14'}
  //   ]

   
    


