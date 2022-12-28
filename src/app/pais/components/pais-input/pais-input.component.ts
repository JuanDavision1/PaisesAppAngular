import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent implements OnInit{

  //Output hacer emision
  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();
  @Input()Placeholder:string= ''
  debouncer:Subject<string> = new Subject();
termino:string=''

ngOnInit(): void {
 this.debouncer.pipe(
  debounceTime(300)
 ).subscribe(valor =>{
  this.onDebounce.emit(valor)
 })
}
buscar(){
this.onEnter.emit(this.termino)
this.onDebounce.subscribe()
}
teclaPresionada(){
// console.log(this.termino)
this.debouncer.next(this.termino)
}
}
