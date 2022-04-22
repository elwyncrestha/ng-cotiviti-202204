import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: InventoryListComponent
      },
      {
        path: 'form',
        component: InventoryFormComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'welcome'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
