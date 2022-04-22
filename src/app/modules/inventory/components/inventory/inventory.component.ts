import { Component, OnInit } from '@angular/core';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  RouteConstants = RouteConstants;

  constructor(
    private readonly loggerService: LoggerService
  ) { }

  ngOnInit(): void {
  }

}
