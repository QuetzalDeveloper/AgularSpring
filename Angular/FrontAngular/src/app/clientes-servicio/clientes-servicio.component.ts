import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes-servicio',
  templateUrl: './clientes-servicio.component.html',
  styleUrls: ['./clientes-servicio.component.css']
})
export class ClientesServicioComponent implements OnInit {

  clientes: Cliente[];

  //Agregamos al constructor la inyección de dependencias
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clientes = this.clienteService.getClientes();

  }

}
