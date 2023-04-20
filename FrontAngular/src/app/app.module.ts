import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesJsonExternoComponent } from './clientes-json-externo/clientes-json-externo.component';
import { ClientesServicioComponent } from './clientes-servicio/clientes-servicio.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
    ClientesComponent,
    ClientesJsonExternoComponent,
    ClientesServicioComponent,
    DirectivaComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
