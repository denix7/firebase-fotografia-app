import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Item } from "../models/item";

//firebase
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  urlPortafolio:string = "https://portafoliodennis-e5901.firebaseio.com/items.json";
  
  info:any = {};
  images:any[] = [];


  constructor(public _http:HttpClient,
              public db: AngularFirestore) {

   }

   //Recupera los items del portafolio
   getItems(){
     return this._http.get(this.urlPortafolio);
   }

   nuevoItem(item: Item){
     let body = JSON.stringify(item);
     return this._http.post(this.urlPortafolio, body);
   }

}
