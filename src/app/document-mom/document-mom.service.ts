import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class RecipeService {
    private recipes = [];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
      }
      updateRecipe(index: number, newRecipe) {
        this.recipes[index] = newRecipe;
      }
}
