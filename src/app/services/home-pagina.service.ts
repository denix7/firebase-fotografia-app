import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../models/Home';

@Injectable({
  providedIn: 'root'
})
export class HomePaginaService {

  home:Home = {}

  constructor(public _http:HttpClient) {

    this._http.get('https://tris-portafolio-5162e.firebaseio.com/home.json')
               .subscribe((home:Home) => {
                 //console.log(info)
                 this.home = home;
               })
   }
}