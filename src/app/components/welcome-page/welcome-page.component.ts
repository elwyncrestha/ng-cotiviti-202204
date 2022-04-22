import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/constants/routes.constant';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  @Input() username = 'Jane Doe';   // TODO: Replace with dynamic value.

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  routeToInventory(): void {
    this.router.navigate([RouteConstants.INVENTORY_LIST]);
  }

}
