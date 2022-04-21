import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(history.state);
    console.log(this.activatedRoute.snapshot.queryParams['userId']);
    console.log(this.activatedRoute.snapshot.queryParamMap.get('userId'));
  }

}
