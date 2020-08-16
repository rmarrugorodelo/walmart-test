import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapResponseService } from '../service/map-response.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private mapResponseService: MapResponseService,
    private spinner: NgxSpinnerService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<| HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (!this.isResource(req.url)) {
      this.spinner.show();
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinner.hide();
          return this.mapResponseService.mapResponse(event);
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.mapResponseService.handleError(error);
          this.spinner.hide();
          return throwError(error);
        }
      })
    );
  }


  private isResource(url: string): boolean {
    return url.includes('assets/image') ? true : false;
  }
}
