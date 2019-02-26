import { Component, OnInit } from '@angular/core';
import { FotografiaService } from '../../services/fotografia.service';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  fotos:any[]=[];
  loading:boolean = true;
  constructor(public _fotos: FotografiaService) {
    
    this._fotos.getFotos()
          .subscribe((fotos:any) =>{
            this.fotos = fotos;
            this.loading = false;
            console.log(fotos);
          }) 
  }

  ngOnInit() {
  }

}
