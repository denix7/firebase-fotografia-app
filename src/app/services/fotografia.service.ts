import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FotografiaService {

  urlFotos:string = "https://tris-portafolio.firebaseio.com/fotografia.json";
  
  constructor(public _http: HttpClient) { }
    
  getFotos(){
      return this._http.get(this.urlFotos);
    }
}

