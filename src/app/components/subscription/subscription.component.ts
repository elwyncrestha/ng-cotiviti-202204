import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  Subscription,
  SubscriptionService,
} from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  alert!: {
    type: 'alert-success' | 'alert-danger';
    msg: string;
  };
  subscriptions$!: Observable<Subscription[]>;

  constructor(private readonly service: SubscriptionService) {}

  ngOnInit(): void {
    this.fetchSubscriptions();
  }

  onSubmit(form: NgForm): void {
    this.service.save(form.value).subscribe({
      next: () => {
        this.alert = { type: 'alert-success', msg: 'Subscription updated!' };
        this.fetchSubscriptions();
        form.reset();
      },
      error: () =>
        (this.alert = { type: 'alert-danger', msg: 'Failed to update!' }),
    });
  }

  private fetchSubscriptions(): void {
    this.subscriptions$ = this.service.getAll();
  }
}
