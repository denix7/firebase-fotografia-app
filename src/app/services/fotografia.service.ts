import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FotografiaService {

  urlFotos:string = "https://tris-portafolio-5162e.firebaseio.com/fotografias.json";
  
  constructor(public _http: HttpClient) { }
    
  getFotos(){
      return this._http.get(this.urlFotos);
    }
}

