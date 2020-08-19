import { Component, OnInit, Input } from '@angular/core';

import { recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipesItem : recipe;

  constructor(private recipesservice : RecipesService) { }

  ngOnInit() {
    
  }

}
