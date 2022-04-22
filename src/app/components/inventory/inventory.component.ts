import { Component, OnInit } from '@angular/core';
import { RouteConstants } from 'src/app/constants/routes.constant';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  RouteConstants = RouteConstants;

  constructor() { }

  ngOnInit(): void {
  }

}
