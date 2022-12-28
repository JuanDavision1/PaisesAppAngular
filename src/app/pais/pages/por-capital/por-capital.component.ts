import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
 
})
export class PorCapitalComponent {
  termino: string = '';
  hayerror: boolean = false;
  paisesArr: Country[] = [];
  //injectar el servicio
  constructor(private pasiService: PaisService) {}
  buscar(termino:string) {
    this.hayerror = false;
    this.termino = termino
    this.pasiService.buscarCapital(this.termino).subscribe({
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


}
