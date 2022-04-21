import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() name = 'John Doe';
  @Output() nameChangeEmitter = new EventEmitter<string>();
  showUsername = true;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(e: any): void {
    this.nameChangeEmitter.emit(e.target.value);
  }

}
