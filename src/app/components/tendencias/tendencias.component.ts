import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css']
})
export class TendenciasComponent implements OnInit {
  listMovies: any = [];

  constructor(private _peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies () {
    this._peliculaService.getTrendingMovies().subscribe (
      (data) => {
        this.listMovies = data['results'];
        //console.log(data['results']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
