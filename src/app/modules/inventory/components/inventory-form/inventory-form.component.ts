import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/constants/routes.constant';
import { LoggerService } from 'src/app/services/logger.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss'],
  providers: [LoggerService],
})
export class InventoryFormComponent implements OnInit {
  action: 'Add' | 'Edit' = 'Add';
  form!: FormGroup;

  constructor(
    private readonly loggerService: LoggerService,
    private readonly fb: FormBuilder,
    private readonly inventoryService: InventoryService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    this.inventoryService.save(this.form.value).subscribe({
      complete: () => this.router.navigate([RouteConstants.INVENTORY_LIST]),
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
}
