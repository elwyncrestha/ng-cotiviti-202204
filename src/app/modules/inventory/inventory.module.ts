import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryFormComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  providers: []
})
export class InventoryModule { }
