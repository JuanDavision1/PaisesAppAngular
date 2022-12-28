import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `li{
      cursor:pointer
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayerror: boolean = false;
  paisesArr: Country[] = [];
  paisessugeridos: Country[] = [];
  mostrarsugerencias:boolean=false
  //injectar el servicio
  constructor(private pasiService: PaisService) {}
  buscar(termino:string) {
    this.hayerror = false;
    this.termino = termino
    this.mostrarsugerencias=false
    this.pasiService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paisesArr =paises;
      },
      error: (error) => {
        this.hayerror = true;
        this.paisesArr=[]
      },
    });
  }

  sugerencias(termino:string){
    this.termino = termino
    this.hayerror=false;
    this.mostrarsugerencias=true
   this.pasiService.buscarPais(termino).subscribe(paises=>this.paisessugeridos= paises.splice(0,5),
   (err) => this.paisessugeridos =[])
  }
  buscarsugerido(termino:string){
this.buscar(termino);

  }
}
