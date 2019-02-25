import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'; //carpeta que contendra las imagenes y sus referencias

  constructor(public db: AngularFirestore) { }

  private guardarImagen(imagen: {nombre: string, url: string}){
    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
        .add( imagen );
  }

  //cargar imagenes al storage de firebase
  cargarImagenesFire(imagenes: FileItem[]){ //recibe todo el arreglo de imagenes
    //console.log(imagenes);
    const storageRef = firebase.storage().ref();//crea la referencia de la imagen

    for(const item of imagenes) {//obtiene las imagenes 1 a 1
      item.estaSubiendo = true;
      console.log(item);
      if(item.progreso >= 100){
        continue;
      }
      //sino se subio todas las imagenes
      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`) //path donde se subira
                                                                .put(item.archivo); //sube el archivo al enlace

      //ejecutamos la tarea
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        
        ()=>{//si todo esta correcto
          console.log('Imagen cargada correctamente')
          item.url = uploadTask.snapshot.downloadURL;//url que retorna firebase

          // uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          //   const imageUrl = downloadURL.value;
          //   console.log('URL:' + imageUrl);
          //   console.log(downloadURL);
          // });
          
          item.estaSubiendo = false; //ya subio el archivo
          this.guardarImagen({//guarda la referencia a la BD
            nombre: item.nombreArchivo,
            url: item.url

          });
          (error)=>console.error('Error al subir', error)
        }
      )                                                          
    }
  }
}
