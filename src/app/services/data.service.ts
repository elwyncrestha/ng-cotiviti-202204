import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DataStore } from '../model/data-store';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly username: DataStore<string>;

  constructor() {
    this.username = new DataStore<string>('Jane Doe');
  }

  setUsername(username: string): void {
    this.username.setValue(username);
  }
}
