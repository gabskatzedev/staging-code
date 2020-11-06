import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroceryItem } from 'src/models/GroceryItem';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-create-grocery-item',
  templateUrl: './create-grocery-item.component.html',
  styleUrls: ['./create-grocery-item.component.css']
})
export class CreateGroceryItemComponent implements OnInit {

  private groceryItem: GroceryItem;


  form = new FormGroup({
    groceryName: new FormControl('', [Validators.required]),
    groceryDescription: new FormControl('', [Validators.required]),
    groceryImage: new FormControl('', [Validators.required]),
    groceryPrice: new FormControl('', [Validators.required]),
    groceryCategory: new FormControl('', [Validators.required]),
    groceryQuantity: new FormControl('', [Validators.required]),
  })

  response =  '';

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.groceryItem = {
      id: 0,
      name: 'hey',
      description: '',
      price: 0.0,
      image: '',
      category: '',
      quantity: 0,
      groceryItemId: null
    }
  }

  createItem(){
    console.log("boo");
    this.groceryItem["name"] = this.form.controls['groceryName'].value;
    this.groceryItem["description"] = this.form.controls['groceryDescription'].value;
    this.groceryItem["price"] = this.form.controls['groceryPrice'].value;
    this.groceryItem["category"] = this.form.controls['groceryCategory'].value;
    this.groceryItem["image"] = this.form.controls['groceryImage'].value;
    this.groceryItem["quantity"] = this.form.controls['groceryQuantity'].value;

    console.log(this.groceryItem);
    this.groceryService.createGroceryItem(this.groceryItem).subscribe(
      data => {
        this.response = 'Product created successfully'
      }
    );

  }

}
