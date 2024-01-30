import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  catchError,
  tap,
  throwError,
  timeout,
} from 'rxjs';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  path: string = 'http://localhost:8080/auth';
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  user = new Subject<User>();
  token = new BehaviorSubject<string>(null);
  tokenExpirationTime: any;

  constructor(private http: HttpClient, private router: Router) {}

  doLogin(email: string, password: string) {
    const authenticationModel = {
      email,
      password,
    };

    return this.http.post<any>(this.path + '/login', authenticationModel).pipe(
      catchError(this.handleError),
      tap((response) => {
        debugger;
        this.token.next(response.token);
        localStorage.setItem('authToken', JSON.stringify(this.token.value));
        this.autoLogout(new Date().getTime() * 1000);
      })
    );
  }

  autoLogin() {
    debugger;
    const authToken = JSON.parse(localStorage.getItem('authToken'));

    if (!authToken) {
      return;
    }
    if (authToken) {
      this.token.next(authToken);
      this.isUserLoggedIn.next(true);
      this.autoLogout(new Date().getTime() * 1000);
    }
  }

  doLogout() {
    this.isUserLoggedIn.next(false);
    this.token.next(null);
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);

    if (this.tokenExpirationTime) {
      clearTimeout(this.tokenExpirationTime);
    }
    this.tokenExpirationTime = null;
  }

  autoLogout(expirationDate: number) {
    this.tokenExpirationTime = setTimeout(() => {
      this.doLogout();
    }, 200000);
  }

  doSignUp(user: User) {
    return this.http
      .post<string>(this.path + '/signup', user)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResp: HttpErrorResponse) {
    let errorMessage = 'An unknown error happer!';
    if (!errorResp.error || !errorResp.error.error) {
      errorMessage = errorResp.error.message;
      return throwError(errorMessage);
    } else {
      return throwError(errorResp.error.error.message);
    }
  }
}
