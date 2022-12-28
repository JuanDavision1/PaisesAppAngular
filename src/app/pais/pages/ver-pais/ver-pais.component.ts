import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
 
})
export class VerPaisComponent implements OnInit{
  //activated route tiene todo lo ncesario para que nos ´pdamos suscribir a cualquier cambio de la url
  
  pais!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisservice:PaisService
    ){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //esto es para suscribirse a cambios de url ,aparece el id porque se difinio en las rutas

this.activatedRoute.params.pipe(
  switchMap(({id})=> this.paisservice.getpaisporCodigo(id)),
  tap(console.log)
)
.subscribe(pais=> this.pais= pais)

  //   this.activatedRoute.params
//   .subscribe(({id})=>{
//     console.log(id)
//     this.paisservice.getpaisporCodigo(id)
//     .subscribe(pais=>{
//       console.log(pais)
//     })

//   })
// }
}
}