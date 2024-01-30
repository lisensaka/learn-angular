import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap, take, Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.auth.token.pipe(
      take(1),
      switchMap((authToken) => {
        debugger;
        const token = authToken;
        if (token) {
          const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`),
          });
          return next.handle(authReq);
        } else {
          return next.handle(request);
        }
      })
      // catchError(error => {
      //   if (error instanceof HttpErrorResponse) {
      //     if (error.error.message?.includes('Unauthenticated.')) {
      //       this.auth.logout();
      //       this.router.navigate(['/auth']).then();
      //     }
      //   }
      //   return throwError(error);
      // })
    );
  }
}

// export const AuthInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: AuthInterceptor,
//   multi: true,
// };
