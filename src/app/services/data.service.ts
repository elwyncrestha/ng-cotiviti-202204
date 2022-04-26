import { Injectable } from '@angular/core';
import { DataStore } from '../model/data-store';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly username: DataStore<string>;

  constructor() {
    this.username = new DataStore<string>('Jane Doe');
  }
}
