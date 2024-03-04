import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurModalComponent } from './our-modal/our-modal.component';
import { CountDownComponent } from './count-down/count-down.component';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { GamesModule } from './games/games.module';


@NgModule({
  declarations: [
    AppComponent,
    OurModalComponent,
    CountDownComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    NgbModule,
    NgbTimepickerModule,
    FormsModule,
    JsonPipe,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
