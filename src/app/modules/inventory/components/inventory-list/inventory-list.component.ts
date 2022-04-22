import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { INVENTORY_LIST } from './inventory.constant';
import { Inventory } from './inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
  providers: [LoggerService]
})
export class InventoryListComponent implements OnInit, OnDestroy {
  inventoryList: Inventory[] = INVENTORY_LIST;
  enableEdit = false;

  constructor(private readonly loggerService: LoggerService) {
    console.log('InventoryListComponent constructed!');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('InventoryListComponent destroyed!');
  }

}
