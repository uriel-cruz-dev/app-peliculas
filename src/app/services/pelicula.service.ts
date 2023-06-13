import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  tendencias = 'https://api.themoviedb.org/3/trending/all/week?api_key=c622751f1103ad9f611999deb77b4ff2&language=es';
  proximamente = 'https://api.themoviedb.org/3/movie/popular?api_key=c622751f1103ad9f611999deb77b4ff2&language=es';
  constructor(private http: HttpClient) { }

  getTrendingMovies(): Observable <any>{
    return this.http.get(this.tendencias);
  }

  getUpcomming(): Observable <any>{
    return this.http.get(this.proximamente);
  }
}
