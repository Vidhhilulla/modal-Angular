import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMatchComponent } from './card-match/card-match.component';



@NgModule({
  declarations: [
    CardMatchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    CardMatchComponent
  ]
})
export class GamesModule { }
