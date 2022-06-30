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

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.endPoint}/heroes/?q=${term}&_limit=6`);
  }

  // CRUD heroes

  // 'C' Create
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.endPoint}/heroes`, hero);
  }

  // 'R' Read

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.endPoint}/heroes`);
  }

  getHeroe(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.endPoint}/heroes/${id}`);
  }

  // 'U' Update

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.endPoint}/heroes/${hero.id}`, hero);
  }

  // 'D' Delete

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${this.endPoint}/heroes/${id}`);
  }
}
