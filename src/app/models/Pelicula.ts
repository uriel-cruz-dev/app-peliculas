export class Pelicula {
  _id?: number;
  title: string;
  release_date: string;

  constructor(title: string, release_date: string) {
    this.title = title;
    this.release_date = release_date;
  }
}