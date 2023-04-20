import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes-json-externo',
  templateUrl: './clientes-json-externo.component.html',
  styleUrls: ['./clientes-json-externo.component.css']
})
export class ClientesJsonExternoComponent implements OnInit {

  clientes: Cliente[];

  constructor() { }

  ngOnInit() {

    this.clientes = CLIENTES;

  }

}
