import { Component, OnInit } from '@angular/core';
import { HomePaginaService } from '../../services/home-pagina.service';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _home: HomePaginaService, public _info:InfoPaginaService) { }

  ngOnInit() {
  }

}
