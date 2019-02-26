import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  educacion:any[] = [];
  constructor(public _info: InfoPaginaService) {
    this.educacion=_info.info.educacion;
  }
  ngOnInit() {
  }

}
