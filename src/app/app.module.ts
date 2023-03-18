import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import {CodePipe, HeightPipe, WeightPipe} from './pipes/pipe';
import { DetailsComponent } from './details/details.component';
import { BadgeComponent } from './details/badge/badge.component';
import { TazoComponent } from './tazo/tazo.component';

@NgModule({
  declarations: [
    AppComponent,
    CodePipe,
    HeightPipe,
    WeightPipe,
    DetailsComponent,
    BadgeComponent,
    TazoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
