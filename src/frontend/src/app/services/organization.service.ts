import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Organization } from '../models/organization';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private organizationApiUrl: string;
  private organization: any;
  private user: any;

  constructor(private http: HttpClient) {
    this.organizationApiUrl = 'http://localhost:8000/api/v1/organizations/';
    this.organization;
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.organizationApiUrl);
    // return ORGANIZATIONS;
  }

  addOrganization(organizationName: string): Observable<Organization> {
    const obj = {
      name: organizationName
    };

    var user = JSON.parse(localStorage.currentUser);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'ZBearer ' + user.token
      })
    };

    return this.http.post<any>(this.organizationApiUrl, obj, httpOptions).pipe(
      retry(3),
      tap(_ => console.log('add organization')),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
