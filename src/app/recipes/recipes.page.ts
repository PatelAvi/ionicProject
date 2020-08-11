import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';

import { recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes : recipe[];

  

  constructor(private recipesservice : RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesservice.getAllRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.recipesservice.getAllRecipes();
  }

}
