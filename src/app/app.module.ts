import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NameListComponent } from './name-list/name-list.component';
import { NameInfoComponent } from './name-info/name-info.component';
import { DisplatResultComponent } from './displat-result/displat-result.component';

import { NamePoolService } from './shared/name-pool.service';
import { SearchStatService } from './shared/search-stat.service';
import { from } from 'rxjs/observable/from';
import { DisplayResultComponent } from './display-result/display-result.component';
import { DisplayStatComponent } from './display-stat/display-stat.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCXkXqCKZevGy1MgxkCpedzf2pT8cNEcA0",
  authDomain: "ywc-interview-hw.firebaseapp.com",
  databaseURL: "https://ywc-interview-hw.firebaseio.com",
  projectId: "ywc-interview-hw",
  storageBucket: "ywc-interview-hw.appspot.com",
  messagingSenderId: "988499838697"
};
const appRoutes:Routes = [
  {
    path:"result",
    component:DisplayResultComponent
  },
  {
    path:"",
    redirectTo:"/result",
    pathMatch:"full"
  },
  {
    path:"stat",
    component:DisplayStatComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NameListComponent,
    NameInfoComponent,
    DisplatResultComponent,
    DisplayResultComponent,
    DisplayStatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [NamePoolService,
    SearchStatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
