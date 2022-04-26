import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type Subscription = {
  email: string;
};

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private readonly http: HttpClient) { }

  save(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${environment.SERVER_URL}/v1/subscription`, subscription);
  }

  getAll(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${environment.SERVER_URL}/v1/subscription`);
  }
}
