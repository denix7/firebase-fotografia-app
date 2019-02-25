import { Directive, EventEmitter, ElementRef,
          HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos:FileItem[] = []; //recibe archivos que se necesita controlar
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  @HostListener('dragover', ['$event'])//si se arrastra algo sobre el elemento dispara un event)
    public onDragEnter( event: any){
      this.mouseSobre.emit(true);//el mouse esta sobre el elemento
      this._prevenirDetener(event);
    }

  @HostListener('dragleave', ['$event'])//El mouse salio del div
    public onDragLeave( event: any){
      this.mouseSobre.emit(false);//el mouse no esta sobre el elemento
    }

  @HostListener('drop', ['$event'])//si se suelta algo sobre el elemento 
    public onDrop( event: any){
      
      const transferencia = this._getTransferencia(event); //Informacion que quiero obtener de los archivos
      
      if(!transferencia){//si no hay archivos no hago nada
        return;
      }
      
      this._extraerArchivos( transferencia.files); //si existen archivos 
      
      this._prevenirDetener(event); //para que no abra todo 
      
      this.mouseSobre.emit(false);//el mouse no esta sobre el elemento
    }

    private _getTransferencia(event: any){//recibe el evento y ayuda a compatibilidad entre navegadores y uso de drag and drop
      return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer
    }

    //extraer Archivos
    private _extraerArchivos( archivosLista: FileList){//recibe un objeto fileList de todos los objetos que se hizo drag and drop
      //console.log(archivosLista);

      //tslint:disable-next-line:forin  Ya que los archivos arrastrados son objetos, se necesita separarlos en un array
      for(const propiedad in Object.getOwnPropertyNames(archivosLista)){//ya que no es Array, el for itera todas las propiedades del objeto
        const archivoTemporal = archivosLista[propiedad];

        if(this._archivoPuedeSerCargado(archivoTemporal)){  //Si el archivo puede ser cargado lo almacenamos en un arreglo
          const nuevoArchivo = new FileItem(archivoTemporal);//fileitem recibe el archivo temporal
          this.archivos.push(nuevoArchivo); //insertamos el archivo con su informacion al arreglo
          //console.log(this.archivos);
        }
      }
    }



    //validaciones
    private _prevenirDetener(event){//Previene que el archivo dropeado no se abra en el navegador
      event.preventDefault();
      event.stopPropagation();
    }

    private _archivoYaFueDroppeado(nombreArchivo:string): boolean{//Verifica si el archivo ya fue dropeado
      for(const archivo of this.archivos){
        if(archivo.nombreArchivo == nombreArchivo){
          console.log('El archivo ' + nombreArchivo + 'Ya esta agregado');
        return true;
        }
      }

      return false;
    }

    //Valida si el archivo es imagen
    private _esImagen (tipoArchivo: string): boolean{
      return(tipoArchivo === '' || tipoArchivo === undefined) ? false: tipoArchivo.startsWith('image');
    }

    //archivo puede ser dropeado y que sea imagen
    private _archivoPuedeSerCargado(archivo: File): boolean{
      if(!this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)){
        return true;
      }
      else{
        return false;
      }
    }
}
