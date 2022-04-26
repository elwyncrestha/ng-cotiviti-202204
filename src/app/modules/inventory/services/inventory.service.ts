import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inventory } from '../components/inventory-list/inventory.model';

const INVENTORY_URL = `${environment.SERVER_URL}/v1/inventory`;

@Injectable()
export class InventoryService {
  constructor(private readonly http: HttpClient) {}

  fetchInventories(): Observable<Inventory[]> {
    return this.http
      .get<Inventory[]>(INVENTORY_URL)
      .pipe(catchError((err) => {
        console.error(err);
        return of([]);
      }));
  }

  fetchById(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${INVENTORY_URL}/${id}`);
  }

  save(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(INVENTORY_URL, inventory);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${INVENTORY_URL}/${id}`);
  }
}
