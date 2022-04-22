import { Component, OnInit } from '@angular/core';
import { INVENTORY_LIST } from './inventory.constant';
import { Inventory } from './inventory.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventoryList: Inventory[] = INVENTORY_LIST;
  enableEdit = false;

  constructor() { }

  ngOnInit(): void {
  }

}
