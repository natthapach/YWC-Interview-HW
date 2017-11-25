import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NameListComponent } from './name-list/name-list.component';
import { NameInfoComponent } from './name-info/name-info.component';

import { NamePoolService } from './shared/name-pool.service';
import { DisplatResultComponent } from './displat-result/displat-result.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCXkXqCKZevGy1MgxkCpedzf2pT8cNEcA0",
  authDomain: "ywc-interview-hw.firebaseapp.com",
  databaseURL: "https://ywc-interview-hw.firebaseio.com",
  projectId: "ywc-interview-hw",
  storageBucket: "ywc-interview-hw.appspot.com",
  messagingSenderId: "988499838697"
};
@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NameListComponent,
    NameInfoComponent,
    DisplatResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [NamePoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
