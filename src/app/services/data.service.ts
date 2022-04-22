import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  authenticatedUsername = 'John Doe';

  constructor() {
    console.log(this.authenticatedUsername);
  }
}
