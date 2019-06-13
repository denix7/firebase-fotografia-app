import { Component, OnInit } from '@angular/core';
import { PerfilPaginaService } from '../../services/perfil-pagina.service';
import { Perfil } from '../../models/Perfil';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil:Perfil = {}
  educacion:any[] = [];

  constructor(public _perfil: PerfilPaginaService, public _info: InfoPaginaService) {
    this._perfil.getPerfilDatos()
      .subscribe((perfil:any) => {
        this.perfil = perfil;
      })

    this._perfil.getColegios()
      .subscribe((educacion:any) => {
        this.educacion = educacion;
      })  
  }
  ngOnInit() {
  }

}
