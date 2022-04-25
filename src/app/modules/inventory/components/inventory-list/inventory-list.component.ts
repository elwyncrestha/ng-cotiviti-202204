import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/app/services/logger.service';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from './inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
  providers: [LoggerService]
})
export class InventoryListComponent implements OnInit {
  inventoryList$!: Observable<Inventory[]>;
  enableEdit = false;

  constructor(private readonly loggerService: LoggerService, private readonly inventoryService: InventoryService) {
  }

  ngOnInit(): void {
    this.inventoryList$ = this.inventoryService.fetchInventories();
  }

}
