import { DistinctPipe } from './pipes/distinct.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent,
    OrderByPipe,
    DistinctPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
