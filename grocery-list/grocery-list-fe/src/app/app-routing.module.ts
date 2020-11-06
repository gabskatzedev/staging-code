import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CreateGroceryItemComponent } from './create-grocery-item/create-grocery-item.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'create-grocery-item', component: CreateGroceryItemComponent},
  { path: 'grocery-list', component: GroceryListComponent},
  { path: '', redirectTo: '/shopping-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
