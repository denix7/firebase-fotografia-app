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
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
