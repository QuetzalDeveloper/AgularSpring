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
    BrowserModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
