import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { recipe } from '../recipe.model';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadedRecipe : recipe;
  constructor(private activateRoute: ActivatedRoute, private recipesservice : RecipesService,private router: Router,private altctrl : ActionSheetController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesservice.getRecipe(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);

      }
    })
  }

 async onDeleteClick(){
    const alt = await this.altctrl.create({
      header : 'Are you sure?',
      
      buttons : [{
        text : 'Cancel',
        role : 'cancel',
      
      },
      {
        text : 'Delete',
        role : 'destructive',
        handler : () =>{
          this.recipesservice.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['recipes']);
        }
      }
    ]
       
    });
    await alt.present();

  }

}
