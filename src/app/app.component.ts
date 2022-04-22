import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string;

  constructor(private readonly dataService: DataService) {
    this.username = this.dataService.authenticatedUsername;
  }
}
