import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private endPoint: string = environment.endPoint;

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/heroes')
  }

  getHeroe(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.endPoint}/heroes/${id}`)
  }

  getSuggestions(term: string): Observable<Hero[]> {

    return this.http.get<Hero[]>(`${this.endPoint}/heroes/?q=${term}&_limit=6`)
  }
}
