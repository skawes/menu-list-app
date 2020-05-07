import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private subscrption:Subscription;
  ingredients:Ingredient[]=[];
  constructor(private shoppingListService:ShoppingListService) {
     this.ingredients=this.shoppingListService.getIngredients();
    this.subscrption= this.shoppingListService.ingredientsAdd.subscribe(
       (ingredients:Ingredient[])=>{
         this.ingredients=ingredients;

       }
     )
   }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }
}
