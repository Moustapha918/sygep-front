import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs/Observable";
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent
} from '@angular/common/http';
import 'rxjs/add/operator/do';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private token: TokenStorageService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable <HttpEvent<any>> {
    let authReq = req;
    if (this.token.getToken() != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
    }
    return next.handle(authReq)
  .do(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {

          if (err.status === 401) {
            this.router.navigate(['user']);
          }
        }
      });
  }


}
