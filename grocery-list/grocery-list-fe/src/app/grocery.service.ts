import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryItem } from 'src/models/GroceryItem';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private getGroceryItemsUrl = 'http://localhost:8080/grocery/getAllItems';
  private createGroceryItemUrl = 'http://localhost:8080/grocery/createGroceryItem';
  private addGroceryItemToListUrl = 'http://localhost:8080/grocery/addGroceryItemToList';
  private getGroceryListByIdUrl = 'http://localhost:8080/grocery/getGroceryListById';

  constructor(private httpCli: HttpClient) { }

  //get groceries from backend
  getGroceryItems() : Observable<GroceryItem[]>{
    return this.httpCli.get<GroceryItem[]>(this.getGroceryItemsUrl);
  }

  //create new grocery
  createGroceryItem(groceryItem: GroceryItem): Observable<GroceryItem>{
    return this.httpCli.post<GroceryItem>(this.createGroceryItemUrl, groceryItem);
  }

  //add grocery item to a list
  addGroceryItemToList(listId: number, itemId: number): Observable<GroceryItem>{
    return this.httpCli.post<GroceryItem>(this.addGroceryItemToListUrl + '/' + listId + '/' + itemId , null);
  }

  //get grocery items
  getGroceryList() : Observable<GroceryItem[]>{
    return this.httpCli.get<GroceryItem[]>(this.getGroceryListByIdUrl + '/' + 1);
  }
}
