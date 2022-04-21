import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
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
    path: 'inventories',
    component: InventoryListComponent
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
