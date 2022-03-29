import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  endpoint: string = 'http://127.0.0.1:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  currentUser = new User;
  constructor(private http: HttpClient, public router: Router) { 
    this.headers.set('Accept', 'application/json');
  }

  // Sign-up
  inscription(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  // Sign-in
  connexion(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.access_token);

        console.log(res.access_token);
        console.log(res.id);
        console.log(res);
        this.getUserProfile(res.access_token).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['account/' + this.currentUser.id]);
        });
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  deconnexion() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['connexion']);
    }
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    console.log('a');
    let api = `${this.endpoint}/profile`;
    console.log('b');
    
    
    let token = localStorage.getItem('access_token');
    console.log(this.headers.set('Authorization', ''));

    return this.http.post(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}