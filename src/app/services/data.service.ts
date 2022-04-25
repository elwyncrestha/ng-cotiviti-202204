import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _authenticatedUsername: Subject<string>
  readonly username$: Observable<string>;

  constructor() {
    this._authenticatedUsername = new Subject<string>();
    this.username$ = this._authenticatedUsername.asObservable();
  }

  setUsername(username: string): void {
    this._authenticatedUsername.next(username);
  }
}
