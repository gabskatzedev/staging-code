import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPet } from '../common-resources/pet';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor( private myHttpCli: HttpClient) { }

  obtainAllPets(): Observable<IPet[]> {
    return this.myHttpCli.get<IPet[]>('http://localhost:9020/pet-one/api/allpets');
  }

  filterAnimalType(animalType: string): Observable<IPet[]> {
    return this.myHttpCli.get<IPet[]>('http://localhost:9020/pet-one/api/getPetsByAnimalType/' + animalType);
  }

  createPet(pet: IPet): Observable<IPet>{
    return this.myHttpCli.post<IPet>('http://localhost:9020/pet-one/api/registerpet', pet);
  }
}
