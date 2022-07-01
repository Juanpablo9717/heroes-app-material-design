import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.endPoint;
  private authUser: Auth | undefined;

  get auth(): Auth {
    return { ...this.authUser! };
  }

  constructor(private http: HttpClient) {}

  verifyUserAuthentication(): Observable<boolean> {

    if (!localStorage.getItem('userToken')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map( auth => {
        this.authUser = auth;
        return true;
      } )
    );
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((authUser) => (this.authUser = authUser)),
      tap((auth) => localStorage.setItem('userToken', auth.id))
    );
  }
}
