import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartel-pelicula',
  templateUrl: './cartel-pelicula.component.html',
  styleUrls: ['./cartel-pelicula.component.css']
})
export class CartelPeliculaComponent implements OnInit {
  @Input() id: number | undefined;
  @Input() img: string | undefined;
  @Input() title: string | undefined;
  @Input() overview: string | undefined;
  @Input() release_date: string | undefined;  

  constructor(  ) {
  }

  ngOnInit(): void {
  }


}
