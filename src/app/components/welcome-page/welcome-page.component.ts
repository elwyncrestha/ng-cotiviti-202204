import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  RouteConstants = RouteConstants;
  destory$: Subject<void> = new Subject<void>();

  constructor(readonly dsvc: DataService) {}

  ngOnInit(): void {
    this.dsvc.username.data$
      .pipe(
        filter((u) => !!u),
        map((u) => `User: ${u}`),
        takeUntil(this.destory$)
      )
      .subscribe((u) => console.log('[WelcomePageComponent] ', u));
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
