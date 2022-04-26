import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { LoggerService } from 'src/app/services/logger.service';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from './inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
  providers: [LoggerService],
})
export class InventoryListComponent implements OnInit {
  inventoryList$!: Observable<Inventory[]>;
  enableEdit = false;

  constructor(
    private readonly loggerService: LoggerService,
    private readonly inventoryService: InventoryService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  editInventory(id: number): void {
    this.router.navigate([`${RouteConstants.INVENTORY_FORM}/${id}`])
  }

  deleteInventory(id: number): void {
    this.inventoryService.delete(id).subscribe({
      complete: () => this.fetchData(),
    });
  }

  private fetchData(): void {
    this.inventoryList$ = this.inventoryService.fetchInventories();
  }
}
