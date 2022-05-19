import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color : string = 'red';
  private _mensaje : string = 'Este campo es requerido'


  //[color]="color" [mensaje]="textoNombre"


  htmlElement: ElementRef<HTMLElement>;
  //@Input() color: string = 'red';
 // @Input() mensaje: string = 'Este campo es requerido';
 @Input() set color ( color: string){
  this._color = color;
  this.setColor();
}
@Input() set mensaje ( msg: string){
  this._mensaje = msg;
  this.setMensaje();
}

@Input() set valido ( valor: boolean){
  if (valor ){
    this.htmlElement.nativeElement.classList.add('hidden');
  } else{
    this.htmlElement.nativeElement.classList.remove('hidden');

  }
}



  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
 /*   if (changes['mensaje']){
      const msg = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerHTML= msg;
    }

    if (changes['color']){
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
   }*/
  }

  ngOnInit(): void {
   this.setColor();
   this.setMensaje();
   this.setEstilo();
  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }


  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
