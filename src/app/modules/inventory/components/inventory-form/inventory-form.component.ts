import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss'],
  providers: [LoggerService]
})
export class InventoryFormComponent implements OnInit {

  action: 'Add' | 'Edit' = 'Add';
  form!: FormGroup;

  constructor(private readonly loggerService: LoggerService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

}
