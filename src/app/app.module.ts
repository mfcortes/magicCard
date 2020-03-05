import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Se importan modilos de firebase*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ContainercardComponent } from './components/containercard/containercard.component';
import { AdmincardComponent } from './components/containercard/admincard/admincard.component';
import { CardComponent } from './components/containercard/card/card.component';
import { ListcardComponent } from './components/containercard/listcard/listcard.component';

/*se importan los servicios*/
import { CrudcardService } from './services/crudcard.service';

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
  providers: [CrudcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
