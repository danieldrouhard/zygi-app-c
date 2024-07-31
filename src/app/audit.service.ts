import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, first, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';

export interface Audit {
  data: {
    "id": number,
    "name": string,
    "url": string,
    "closerAudit": string,
    "createdAt": string,
    "lastUpdated": string,
    "customer": {
      "id": number | null | undefined,
      "firstName": string | null | undefined,
      "lastName": string | null | undefined,
      "email": string | null | undefined,
      "phoneNumber": string | null | undefined,
      "address": string | null | undefined,
      "city": string | null | undefined,
      "state": string | null | undefined,
      "postalCode": string | null | undefined,
      "country": string | null | undefined,
      "createdAt": string | null | undefined,
      "lastUpdated": string | null | undefined
    },
    "customerId": number | null | undefined,
    "bestPracticesMetricsSummary": string,
    "performanceMetricsSummary": string,
    "seoMetricsSummary": string
  },
  success: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getAudit(id: string): Observable<Audit> {
    return this.http.get<Audit>(`/api/v1/audit/${id}`);
  }

  beginAuditProcess(): Observable<any> {
    // this.isLoading$.next(true);

    return this.route.queryParamMap.pipe(
      first(),
      tap(() => this.isLoading$.next(true)),
      map(params =>  params.get('url')),
      switchMap(url => {
        if (url) {
          return this.http.post<Audit>(`${environment.localApiHost}v1/audit`, {
            projectName: 'Dummy Project Name',
            customerFirstName: 'John',
            customerLastName: 'Doe',
            url,
            customerEmail: 'jon@doe.com',
          }).pipe(
            tap(response => {
              this.isLoading$.next(false);
              this.router.navigateByUrl(`/audit/${response.data.id}`).then(
                () => console.log('Navigation successful.')
              );
            }),
            catchError(error => {
              this.isLoading$.next(false);
              console.error('An error occurred when starting the audit:', error);
              return throwError(error as never) as Observable<any>;
            })
          );
        } else {
          // If there's no 'url' query param, you can return an empty observable or handle accordingly.
          this.isLoading$.next(false);
          return of(null);
        }
      })
    );
  }
}
