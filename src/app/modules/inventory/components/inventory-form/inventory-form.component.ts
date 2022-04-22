import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss'],
  providers: [LoggerService]
})
export class InventoryFormComponent implements OnInit, OnDestroy {

  constructor(private readonly loggerService: LoggerService) {
    console.log('InventoryFormComponent constructed!');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('InventoryFormComponent destroyed!');
  }

}
