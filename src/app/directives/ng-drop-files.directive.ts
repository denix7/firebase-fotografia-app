import { Directive, EventEmitter, ElementRef,
          HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  @HostListener('dragover', ['$event'])//si se arrastra algo sobre el elemento dispara un event)
    public onDragEnter( event: any){
      this.mouseSobre.emit(true);//el mouse esta sobre el elemento
    }

  @HostListener('dragleave', ['$event'])//si se arrastra algo sobre el elemento dispara un event)
    public onDragLeave( event: any){
      this.mouseSobre.emit(false);//el mouse no esta sobre el elemento
    }
}
