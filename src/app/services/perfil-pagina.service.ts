import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../models/Perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilPaginaService {

  constructor(public _http:HttpClient) {}
      

  getPerfilDatos(){
      return this._http.get('https://tris-portafolio-5162e.firebaseio.com/perfil.json')
                 
  }

  getColegios(){
      return this._http.get('https://tris-portafolio-5162e.firebaseio.com/educacion.json')
  }
}