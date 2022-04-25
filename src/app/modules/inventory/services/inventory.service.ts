import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inventory } from '../components/inventory-list/inventory.model';

@Injectable()
export class InventoryService {
  constructor(private readonly http: HttpClient) {}

  fetchInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(
      `${environment.SERVER_URL}/inventory-list.json`
    );
  }
}
