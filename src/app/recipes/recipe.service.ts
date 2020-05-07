import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{
    recipes:Recipe[]=[
        new Recipe('testRecipe','This is a test','https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/5dcc139c96d0db43857c2eb3-a12c2ae7.jpg',
        [new Ingredient('fries',15),new Ingredient('bun',10)]),
        new Recipe('testRecipe2','This is a test2','https://i.pinimg.com/736x/1c/74/48/1c7448f713b7cd7c3ca6db060bdb7215.jpg',
        [new Ingredient('chieckn',15),new Ingredient('mutton',10)])
      ];

      getRecipe(){
          return this.recipes.slice();
      }
      constructor(private shoppingListService:ShoppingListService){

      }
    //   recipeSelected=new EventEmitter<Recipe>();
  

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.shoppingListService.addIngredientsToShoppingList(ingredients)

    
      }

      getRecipeFromId(id:number){
          return this.recipes[id];
      }
}