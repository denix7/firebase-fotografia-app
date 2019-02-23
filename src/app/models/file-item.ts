export class FileItem {
    public archivo: File;   //archivo fisico tipo de dato JS
    public nombreArchivo: string;
    public url: string; //url firebase
    public estaSubiendo: boolean; //%se subio si o no
    public progreso: number; //10%

    public titulo:string;
    public subtitulo:string;

    constructor( archivo: File ){
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;

        this.estaSubiendo = false;
        this.progreso = 0;
    }
}