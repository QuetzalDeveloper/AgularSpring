import { Component } from '@angular/core';

@Component({  //Configuracion
  selector: 'app-root', //Etiqueta html que sirve para cargar el componente en el HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: string = 'Curso Udemy Spring con Angular';
  nombre: string = 'Diego Hernández Cote';
}
