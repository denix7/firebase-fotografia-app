import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';

//router
import { app_routing } from "./app.routes";

//Servicio
import { PortafolioService } from "./services/portafolio.service";

//http
import { HttpClientModule } from "@angular/common/http";

//firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PerfilComponent,
    IngresarComponent,
    PortafolioComponent,
    FotografiaComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    PortafolioService,
    { provide: FirestoreSettingsToken, useValue: {} } //solucion timestampInSnapshot
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
