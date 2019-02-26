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
import { InfoPaginaService } from "./services/info-pagina.service";

//http
import { HttpClientModule } from "@angular/common/http";

//firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CargaComponent } from './components/carga/carga.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


//ScrollReveal
import { NgsRevealModule } from "ngx-scrollreveal";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PerfilComponent,
    IngresarComponent,
    PortafolioComponent,
    FotografiaComponent,
    CargaComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgsRevealModule
  ],
  providers: [
    PortafolioService,
    InfoPaginaService,
    { provide: FirestoreSettingsToken, useValue: {} } //solucion timestampInSnapshot
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
