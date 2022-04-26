import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private readonly dsvc: DataService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.dsvc.username.setValue(user.name);
    });
  }
}
