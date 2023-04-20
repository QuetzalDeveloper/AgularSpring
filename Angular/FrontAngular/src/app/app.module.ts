import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva_ngfor/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesJsonExternoComponent } from './clientes-json-externo/clientes-json-externo.component';
import { ClientesServicioComponent } from './clientes-servicio/clientes-servicio.component';
import { ClienteService } from './clientes-servicio/cliente.service';
//Rutas y navegación
import { RouterModule, Router, Route, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ClientesJsonExternoComponent,
    ClientesServicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
