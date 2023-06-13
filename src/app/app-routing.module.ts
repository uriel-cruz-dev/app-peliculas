import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'tendencias', component: TendenciasComponent},
  {path: 'categoria/:parametro', component: CategoriasComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
