import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroceryItem } from 'src/models/GroceryItem';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public items: GroceryItem[];
  constructor(private groceryService: GroceryService, private router: Router) { }

  ngOnInit(): void {
    this.groceryService.getGroceryItems().subscribe(
      (data) => {
        this.items = data;
      }
    )
  }

  addToShoppingTable(itemId: number){
    this.groceryService.addGroceryItemToList(1, itemId).subscribe(
      (data) => {
        this.router.navigate(['grocery-list']);
      }
    )
  }

}
