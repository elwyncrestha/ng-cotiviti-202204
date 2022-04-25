import { Component, OnInit } from '@angular/core';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  RouteConstants = RouteConstants;

  constructor(readonly dsvc: DataService) {
  }

  ngOnInit(): void {
  }

}
