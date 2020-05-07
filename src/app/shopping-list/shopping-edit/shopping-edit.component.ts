import { Component, OnInit, ViewChild,EventEmitter, ElementRef, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput') inputName:ElementRef;
   @ViewChild('amountInput') inputAmount:ElementRef;

 constructor(private shoppingListService:ShoppingListService){

 }

  ngOnInit(){
  }
 onAdd(){
   const ingName=this.inputName.nativeElement.value;
   const ingAmount=this.inputAmount.nativeElement.value;
   const ingredient=new Ingredient(ingName,ingAmount);
   this.shoppingListService.addIngredients(ingredient);
  
 }
}
