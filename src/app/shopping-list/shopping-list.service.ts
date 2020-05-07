
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
export class ShoppingListService{
   
    private ingredients:Ingredient[]=[new Ingredient('Garlic',2)];
    ingredientsAdd=new Subject<Ingredient[]>();
    getIngredients(){
        return this.ingredients.slice();
    }
    
    addIngredients(ing:Ingredient){
        this.ingredients.push(ing);
        this.ingredientsAdd.next(this.ingredients.slice());
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsAdd.next(this.ingredients.slice());
    }
}