import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Item } from "../models/item";


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  urlPortafolio:string = "https://tris-portafolio-5162e.firebaseio.com/portafolio.json";
  
  //info:any = {};

  constructor(public _http:HttpClient) {

   }

   //Recupera los items del portafolio
   getItems(){
     return this._http.get(this.urlPortafolio);
   }

  //  nuevoItem(item: Item){
  //    let body = JSON.stringify(item);
  //    return this._http.post(this.urlPortafolio, body);
  //  }

}
