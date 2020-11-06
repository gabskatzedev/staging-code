import { Component, OnInit } from '@angular/core';
import { GroceryItem } from 'src/models/GroceryItem';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  public items: GroceryItem[];
  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.groceryService.getGroceryList().subscribe(
      (data) => {
        this.items = data;
      }
    )
  }

}
