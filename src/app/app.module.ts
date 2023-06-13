import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartelPeliculaComponent } from './components/cartel-pelicula/cartel-pelicula.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    CartelPeliculaComponent,
    InicioComponent,
    TendenciasComponent,
    ErrorComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
