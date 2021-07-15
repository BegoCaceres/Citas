import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCitasComponent,
    CrearCitasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
