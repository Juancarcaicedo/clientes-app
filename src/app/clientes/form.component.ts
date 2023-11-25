import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'crear cliente';
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}
  public crearCliente(): void {
    this.clienteService.create(this.cliente).subscribe((respose) => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Nuevo cliente',
        `Cliente ${respose.nombre} creado con éxito!`,
        'success'
      );
    });
  }
}
