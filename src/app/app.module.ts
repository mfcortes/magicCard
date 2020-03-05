import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ContainercardComponent } from './components/containercard/containercard.component';
import { AdmincardComponent } from './components/containercard/admincard/admincard.component';
import { CardComponent } from './components/containercard/card/card.component';
import { ListcardComponent } from './components/containercard/listcard/listcard.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainercardComponent,
    AdmincardComponent,
    CardComponent,
    ListcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
