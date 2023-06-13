import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categoria: string | undefined;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria = this.rutaActiva.snapshot.params['parametro'];
  }

}
