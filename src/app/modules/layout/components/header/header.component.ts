import { Component, OnInit } from '@angular/core';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { DataService } from 'src/app/services/data.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showUsername = true;
  RouteConstants = RouteConstants;

  constructor(
    private readonly loggerService: LoggerService,
    readonly dsvc: DataService
  ) {
  }

  ngOnInit(): void {
  }

  onNameChange(e: any): void {
    this.dsvc.setUsername(e.target.value);
  }

}
