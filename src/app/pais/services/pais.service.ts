import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.com/v2'

get httpparams(){
  return  new HttpParams()
  .set('fields','name,capital,alpha2Code,flags,population')
}
  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url,{params:this.httpparams})
  }
  buscarCapital(termino:string):Observable<Country[]>{
   const url=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpparams})
  }

getpaisporCodigo(termino:string):Observable<Country>{
  const url=`${this.apiUrl}/alpha/${termino}`;
   return this.http.get<Country>(url)
 }

 getRegion(termino:string):Observable<Country[]>{

  const url=`${this.apiUrl}/regionalbloc/${termino}`;

   return this.http.get<Country[]>(url,{params:this.httpparams}).pipe(
    tap(console.log
    )
   )
 }
}
