import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../../services/portafolio.service";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  items:any[] = [];
  constructor(private _portafolioService:PortafolioService) {

    this._portafolioService.getItems()
        .subscribe(items =>{
          this.items = items as any;
        })
   }


  ngOnInit() {
  }

}
