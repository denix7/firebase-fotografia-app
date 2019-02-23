import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'; //carpeta que contendra las imagenes y sus referencias

  constructor(public db: AngularFirestore) { }

  private guardarItem(imagen: {nombre: string, url: string}){
    this.db.collection(`/${ this.CARPETA_IMAGENES}`)
        .add(imagen)
  }

  cargarImagenesFire(imagenes: FileItem[]){
    console.log(imagenes);
  }
}
