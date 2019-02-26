import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../models/Info';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:Info = {}

  constructor(public _http:HttpClient) {

    this._http.get('https://tris-portafolio.firebaseio.com/infoPagina.json')
               .subscribe((info:Info) => {
                 console.log(info)
                 this.info = info;
               })
   }
}
