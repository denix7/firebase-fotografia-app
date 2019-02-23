import { Router, RouterModule, ROUTES, RouterLink, RouterLinkActive, Routes } from "@angular/router";
import { HeaderComponent,HomeComponent,FooterComponent,PortafolioComponent,PerfilComponent, FotografiaComponent, IngresarComponent} from "./components/index.paginas";
import { CargaComponent } from './components/carga/carga.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'fotografia', component: FotografiaComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'ingresar', component: IngresarComponent },
    { path: 'cargar', component: CargaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true})