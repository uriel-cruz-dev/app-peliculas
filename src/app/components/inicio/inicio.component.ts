import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listMoviesUpcoming: any = [];

  constructor(private _peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.getMoviesUpcoming();
  }

  getMoviesUpcoming () {
    this._peliculaService.getUpcomming().subscribe (
      (data) => {
        this.listMoviesUpcoming = data['results'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
