import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    constructor() { }

    public sendFormContact(request: any): Observable<any> {
        if (environment.sendEmail === true) {
        const requestBody = JSON.stringify(request);
        return from(
            fetch(
            environment.lambdaURL,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: requestBody,
                mode: 'no-cors',
            }
            ).then(response => response.json())
            .catch(error => console.error('Error al enviar la solicitud:', error))
        );
        }
        return throwError(() => new Error());
    }
}