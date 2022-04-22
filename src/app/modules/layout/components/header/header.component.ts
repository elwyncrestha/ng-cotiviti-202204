import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() name = 'John Doe';
  @Output() nameChangeEmitter = new EventEmitter<string>();
  showUsername = true;
  RouteConstants = RouteConstants;

  constructor(
    private readonly loggerService: LoggerService
  ) { }

  ngOnInit(): void {
  }

  onNameChange(e: any): void {
    this.nameChangeEmitter.emit(e.target.value);
  }

}
