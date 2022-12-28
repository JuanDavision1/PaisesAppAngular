import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
styles: [`button{
  margin-right:5px;}`

  ]

})
export class PorRegionComponent {
 regiones:string[]=[ 'EU' ,'EFTA' ,'CARICOM' ,'PA' ,'AU' ,'USAN', 'EEU' ,'AL', 'ASEAN' ,'CAIS', 'CEFTA' ,'NAFTA' ,'SAARC']
 regionActiva:string =''
 paisesArr: Country[] = [];
constructor(private paisservice:PaisService){}
getClaseCss(region:string){
return (region === this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary'
}
 activarregio (region:string){
  if(region == this.regionActiva){return}
  this.regionActiva = region;
  this.paisesArr =[]
  this.paisservice.getRegion(region)
  .subscribe(paises =>{this.paisesArr = paises});
 }
 //todo hacer el servicio al llamado
}
