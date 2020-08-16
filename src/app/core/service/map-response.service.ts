import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../shared/service/alert.service';

@Injectable({ providedIn: 'root' })
export class MapResponseService {

    constructor(private alertService: AlertService) {
    }

    public mapResponse(event: HttpResponse<any>) {
        return event.clone({ body: event.body.data ? event.body.data : event.body });
    }

    public handleError(error: HttpErrorResponse) {
        this.alertService.showErrorMessage(error.message, 'Disculpa');
    }

}
