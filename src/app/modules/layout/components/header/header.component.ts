import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteConstants } from 'src/app/constants/routes.constant';

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

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(e: any): void {
    this.nameChangeEmitter.emit(e.target.value);
  }

}
